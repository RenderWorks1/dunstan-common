"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Hotspot,
  ORIGIN_OFFSET,
  SITE_PLAN_HOTSPOTS,
  SITE_PLAN_VIEW_BOX,
  UNIT_TYPE_IMAGES,
  UNIT_TYPE_LABELS,
} from "@/data/sitePlanHotspots";

interface Props {
  imageSrc: string;
  imageAlt?: string;
  hotspots?: Hotspot[];
  onSelectHotspot?: (hotspot: Hotspot) => void;
}

interface RelativePosition {
  x: number;
  y: number;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function translatePoints(points: string) {
  return points
    .trim()
    .split(/\s+/)
    .map((point) => {
      const [x, y] = point.split(",").map(Number);
      return `${x + ORIGIN_OFFSET.x},${y + ORIGIN_OFFSET.y}`;
    })
    .join(" ");
}

function BedIcon() {
  return (
    <svg
      aria-hidden
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M3 10.5V19m0-5h18m0 0v5m0-8.5V19M7 10.5V8.75A1.75 1.75 0 0 1 8.75 7h2.5A1.75 1.75 0 0 1 13 8.75v1.75m-6 0h12a2 2 0 0 1 2 2V14H3v-1.5a2 2 0 0 1 2-2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function getStatusBadgeClasses(status: NonNullable<Hotspot["meta"]>["status"]) {
  if (status === "sold") {
    return "border-red-200 bg-red-50 text-red-700";
  }

  if (status === "limited") {
    return "border-amber-200 bg-amber-50 text-amber-700";
  }

  return "border-emerald-200 bg-emerald-50 text-emerald-700";
}

export default function InteractiveSitePlan({
  imageSrc,
  imageAlt = "Interactive site plan",
  hotspots = SITE_PLAN_HOTSPOTS,
  onSelectHotspot,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const [hoveredHotspotId, setHoveredHotspotId] = useState<string | null>(null);
  const [selectedHotspotId, setSelectedHotspotId] = useState<string | null>(null);
  const [cursorPosition, setCursorPosition] = useState<RelativePosition | null>(
    null,
  );
  const [selectedTooltipPosition, setSelectedTooltipPosition] =
    useState<RelativePosition | null>(null);
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  });

  const adjustedHotspots = useMemo(
    () =>
      hotspots.map((hotspot) => ({
        ...hotspot,
        adjustedPoints: translatePoints(hotspot.points),
        adjustedCentroid: {
          x: hotspot.centroid.x + ORIGIN_OFFSET.x,
          y: hotspot.centroid.y + ORIGIN_OFFSET.y,
        },
      })),
    [hotspots],
  );

  const activeHotspot = adjustedHotspots.find(
    (hotspot) => hotspot.id === (selectedHotspotId ?? hoveredHotspotId),
  );

  function clearSelection() {
    setHoveredHotspotId(null);
    setSelectedHotspotId(null);
    setSelectedTooltipPosition(null);
  }

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const updatePointerType = () => setIsCoarsePointer(mediaQuery.matches);

    updatePointerType();
    mediaQuery.addEventListener("change", updatePointerType);

    return () => {
      mediaQuery.removeEventListener("change", updatePointerType);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const container = containerRef.current;
    const updateContainerSize = () => {
      setContainerSize({
        width: container.clientWidth,
        height: container.clientHeight,
      });
    };

    updateContainerSize();

    const resizeObserver = new ResizeObserver(() => {
      updateContainerSize();
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        clearSelection();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setHoveredHotspotId(null);
        setSelectedHotspotId(null);
        setSelectedTooltipPosition(null);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function getRelativePointerPosition(
    event: Pick<MouseEvent, "clientX" | "clientY">,
  ) {
    const rect = containerRef.current?.getBoundingClientRect();

    if (!rect) {
      return null;
    }

    return {
      x: clamp(event.clientX - rect.left, 0, rect.width),
      y: clamp(event.clientY - rect.top, 0, rect.height),
    };
  }

  function getCentroidPositionForSize(
    hotspot: (typeof adjustedHotspots)[number],
    width: number,
    height: number,
  ) {
    if (!width || !height) {
      return null;
    }

    return {
      x: (hotspot.adjustedCentroid.x / SITE_PLAN_VIEW_BOX.width) * width,
      y: (hotspot.adjustedCentroid.y / SITE_PLAN_VIEW_BOX.height) * height,
    };
  }

  function getCentroidPosition(hotspot: (typeof adjustedHotspots)[number]) {
    return getCentroidPositionForSize(
      hotspot,
      containerRef.current?.clientWidth ?? 0,
      containerRef.current?.clientHeight ?? 0,
    );
  }

  function handleMouseMove(event: React.MouseEvent<SVGSVGElement>) {
    if (isCoarsePointer || selectedHotspotId) {
      return;
    }

    const nextPosition = getRelativePointerPosition(event.nativeEvent);

    if (nextPosition) {
      setCursorPosition(nextPosition);
    }
  }

  function handleSelectHotspot(
    hotspot: (typeof adjustedHotspots)[number],
    event?:
      | React.MouseEvent<SVGPolygonElement>
      | React.KeyboardEvent<SVGPolygonElement>,
  ) {
    if (selectedHotspotId === hotspot.id) {
      clearSelection();
      return;
    }

    onSelectHotspot?.(hotspot);
    setSelectedHotspotId(hotspot.id);
    setHoveredHotspotId(hotspot.id);

    if (isCoarsePointer) {
      setSelectedTooltipPosition(null);
      return;
    }

    if (event && "clientX" in event) {
      const nextPosition = getRelativePointerPosition(event.nativeEvent);

      if (nextPosition) {
        setSelectedTooltipPosition(nextPosition);
        return;
      }
    }

    setSelectedTooltipPosition(getCentroidPosition(hotspot));
  }

  const containerAspectRatio =
    SITE_PLAN_VIEW_BOX.width / SITE_PLAN_VIEW_BOX.height;
  const containerWidth = containerSize.width;
  const containerHeight = containerSize.height;
  const desktopTooltipPosition = selectedHotspotId
    ? selectedTooltipPosition ??
      (activeHotspot
        ? getCentroidPositionForSize(activeHotspot, containerWidth, containerHeight)
        : null)
    : cursorPosition ?? selectedTooltipPosition;

  const desktopTooltipLeft = desktopTooltipPosition
    ? clamp(desktopTooltipPosition.x, 24, Math.max(containerWidth - 24, 24))
    : 0;
  const desktopTooltipTop = desktopTooltipPosition ? desktopTooltipPosition.y : 0;
  const placeTooltipBelow =
    desktopTooltipPosition && containerHeight
      ? desktopTooltipPosition.y < containerHeight * 0.32
      : true;

  return (
    <div
      ref={containerRef}
      className="relative isolate w-full overflow-hidden rounded-2xl border border-stone/60 bg-white shadow-sm"
      style={{ aspectRatio: containerAspectRatio }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-contain select-none"
        sizes="(max-width: 768px) 100vw, (max-width: 1400px) 92vw, 1400px"
      />

      <svg
        className="absolute inset-0 z-10 h-full w-full"
        viewBox={`0 0 ${SITE_PLAN_VIEW_BOX.width} ${SITE_PLAN_VIEW_BOX.height}`}
        preserveAspectRatio="xMidYMid meet"
        onMouseLeave={() => {
          if (!selectedHotspotId) {
            setHoveredHotspotId(null);
          }
        }}
        onMouseMove={handleMouseMove}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            clearSelection();
          }
        }}
      >
        {adjustedHotspots.map((hotspot) => {
          const isActive =
            hotspot.id === selectedHotspotId || hotspot.id === hoveredHotspotId;

          return (
            <polygon
              key={hotspot.id}
              points={hotspot.adjustedPoints}
              role="button"
              tabIndex={0}
              aria-label={`${hotspot.label}, ${UNIT_TYPE_LABELS[hotspot.unitType]}`}
              aria-pressed={selectedHotspotId === hotspot.id}
              style={{ pointerEvents: "all" }}
              className="cursor-pointer outline-none transition-all duration-150 focus:fill-white/15"
              fill={isActive ? "rgba(255,255,255,0.18)" : "transparent"}
              stroke={selectedHotspotId === hotspot.id ? "rgba(0,0,0,0.35)" : "transparent"}
              strokeWidth={selectedHotspotId === hotspot.id ? 10 : 0}
              onMouseEnter={() => {
                if (!isCoarsePointer && !selectedHotspotId) {
                  setHoveredHotspotId(hotspot.id);
                }
              }}
              onMouseLeave={() => {
                if (!isCoarsePointer && !selectedHotspotId) {
                  setHoveredHotspotId(null);
                }
              }}
              onFocus={() => {
                if (!selectedHotspotId) {
                  setHoveredHotspotId(hotspot.id);
                  setSelectedTooltipPosition(getCentroidPosition(hotspot));
                }
              }}
              onBlur={() => {
                if (!selectedHotspotId) {
                  setHoveredHotspotId(null);
                  setSelectedTooltipPosition(null);
                }
              }}
              onClick={(event) => {
                event.stopPropagation();
                handleSelectHotspot(hotspot, event);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleSelectHotspot(hotspot, event);
                }

                if (event.key === "Escape") {
                  event.preventDefault();
                  clearSelection();
                }
              }}
            />
          );
        })}
      </svg>

      {activeHotspot &&
        (isCoarsePointer ? (
          <div className="absolute inset-x-3 bottom-3 z-20">
            <div className="mx-auto w-full max-w-[260px] sm:max-w-sm rounded-2xl bg-white/95 overflow-hidden shadow-xl backdrop-blur">
              <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-body-text">
                    {activeHotspot.label}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-dark-text">
                    {UNIT_TYPE_LABELS[activeHotspot.unitType]}
                  </h3>
                </div>
                {activeHotspot.meta?.status ? (
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] ${getStatusBadgeClasses(
                      activeHotspot.meta.status,
                    )}`}
                  >
                    {activeHotspot.meta.status}
                  </span>
                ) : null}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-body-text">
                {activeHotspot.meta?.bedrooms ? (
                  <span className="flex items-center gap-1.5">
                    <BedIcon />
                    {activeHotspot.meta.bedrooms}{" "}
                    {activeHotspot.meta.bedrooms === 1 ? "Bed" : "Beds"}
                  </span>
                ) : null}
                {activeHotspot.meta?.bathrooms ? (
                  <span className="rounded-full bg-amazon-100 px-3 py-1">
                    {activeHotspot.meta.bathrooms} bath
                  </span>
                ) : null}
                {activeHotspot.meta?.floorArea ? (
                  <span className="rounded-full bg-amazon-100 px-3 py-1">
                    {activeHotspot.meta.floorArea}
                  </span>
                ) : null}
                {activeHotspot.meta?.priceFrom ? (
                  <span className="rounded-full bg-amazon-100 px-3 py-1">
                    From {activeHotspot.meta.priceFrom}
                  </span>
                ) : null}
              </div>

              {activeHotspot.meta?.description ? (
                <p className="mt-3 text-sm leading-relaxed text-body-text">
                  {activeHotspot.meta.description}
                </p>
              ) : null}
              <p className="mt-3 text-xs text-body-text/80">
                Click to view more info
              </p>
              </div>
            </div>
          </div>
        ) : desktopTooltipPosition ? (
          <div
            className="absolute z-20 w-[min(20rem,calc(100%-24px))] rounded-2xl bg-white/95 overflow-hidden shadow-xl backdrop-blur"
            style={{
              left: desktopTooltipLeft,
              top: desktopTooltipTop,
              transform: placeTooltipBelow
                ? "translate(-50%, 16px)"
                : "translate(-50%, calc(-100% - 16px))",
            }}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={UNIT_TYPE_IMAGES[activeHotspot.unitType]}
                alt={UNIT_TYPE_LABELS[activeHotspot.unitType]}
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
            <div className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-body-text">
                  {activeHotspot.label}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-dark-text">
                  {UNIT_TYPE_LABELS[activeHotspot.unitType]}
                </h3>
              </div>
              {activeHotspot.meta?.status ? (
                <span
                  className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] ${getStatusBadgeClasses(
                    activeHotspot.meta.status,
                  )}`}
                >
                  {activeHotspot.meta.status}
                </span>
              ) : null}
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-body-text">
              {activeHotspot.meta?.bedrooms ? (
                <span className="flex items-center gap-1.5">
                  <BedIcon />
                  {activeHotspot.meta.bedrooms}{" "}
                  {activeHotspot.meta.bedrooms === 1 ? "Bed" : "Beds"}
                </span>
              ) : null}
              {activeHotspot.meta?.bathrooms ? (
                <span className="rounded-full bg-amazon-100 px-3 py-1">
                  {activeHotspot.meta.bathrooms} bath
                </span>
              ) : null}
              {activeHotspot.meta?.floorArea ? (
                <span className="rounded-full bg-amazon-100 px-3 py-1">
                  {activeHotspot.meta.floorArea}
                </span>
              ) : null}
              {activeHotspot.meta?.priceFrom ? (
                <span className="rounded-full bg-amazon-100 px-3 py-1">
                  From {activeHotspot.meta.priceFrom}
                </span>
              ) : null}
            </div>

            {activeHotspot.meta?.description ? (
              <p className="mt-3 text-sm leading-relaxed text-body-text">
                {activeHotspot.meta.description}
              </p>
            ) : null}
            <p className="mt-3 text-xs text-body-text/80">
              Click to view more info
            </p>
            </div>
          </div>
        ) : null)}
    </div>
  );
}
