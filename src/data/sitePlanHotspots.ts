export const SITE_PLAN_VIEW_BOX = {
  width: 6339,
  height: 3905,
} as const;

export type UnitType =
  | "TYPE_1_VILLA"
  | "TYPE_2_VILLA"
  | "TYPE_3_VILLA"
  | "TYPE_4_VILLA"
  | "TYPE_5_VILLA"
  | "TYPE_6_VILLA";

export interface Hotspot {
  id: string;
  label: string;
  unitType: UnitType;
  points: string;
  centroid: { x: number; y: number };
  meta?: {
    bedrooms?: number;
    bathrooms?: number;
    floorArea?: string;
    priceFrom?: string;
    status?: "available" | "limited" | "sold";
    description?: string;
  };
}

export const UNIT_TYPE_LABELS: Record<UnitType, string> = {
  TYPE_1_VILLA: "3 Bed South Entry",
  TYPE_2_VILLA: "3 Bed Side Entry",
  TYPE_3_VILLA: "2 Bed South Entry Duplex",
  TYPE_4_VILLA: "2 Bed North Entry",
  TYPE_5_VILLA: "2 Bed South Entry",
  TYPE_6_VILLA: "2 Bed North Entry Duplex",
};

export const UNIT_TYPE_IMAGES: Record<UnitType, string> = {
  TYPE_1_VILLA: "/unit-type-images/type1v2.png",
  TYPE_2_VILLA: "/unit-type-images/type2.png",
  TYPE_3_VILLA: "/unit-type-images/type3.png",
  TYPE_4_VILLA: "/unit-type-images/type4v2.png",
  TYPE_5_VILLA: "/unit-type-images/type5.png",
  TYPE_6_VILLA: "/unit-type-images/type6.png",
};

const UNIT_TYPE_DEFAULT_META: Record<UnitType, Hotspot["meta"]> = {
  TYPE_1_VILLA: {
    bedrooms: 3,
    description: "South entry villa with double garage.",
  },
  TYPE_2_VILLA: {
    bedrooms: 3,
    description: "Side entry villa layout.",
  },
  TYPE_3_VILLA: {
    bedrooms: 2,
    description: "South entry duplex layout.",
  },
  TYPE_4_VILLA: {
    bedrooms: 2,
    description: "North entry villa layout.",
  },
  TYPE_5_VILLA: {
    bedrooms: 2,
    description: "South entry villa layout.",
  },
  TYPE_6_VILLA: {
    bedrooms: 2,
    description: "North entry duplex layout.",
  },
};

// Increase x to shift all hotspots right. Increase y to shift all hotspots down.
export const ORIGIN_OFFSET = { x: 0, y: 0 } as const;

function rectToPoints(x: number, y: number, width: number, height: number) {
  return `${x},${y} ${x + width},${y} ${x + width},${y + height} ${x},${y + height}`;
}

function createHotspot(
  id: string,
  label: string,
  unitType: UnitType,
  x: number,
  y: number,
  width: number,
  height: number,
  meta?: Hotspot["meta"],
): Hotspot {
  return {
    id,
    label,
    unitType,
    points: rectToPoints(x, y, width, height),
    centroid: {
      x: x + width / 2,
      y: y + height / 2,
    },
    meta: {
      ...UNIT_TYPE_DEFAULT_META[unitType],
      ...meta,
    },
  };
}

export const SITE_PLAN_HOTSPOTS: Hotspot[] = [
  createHotspot("lot-06", "Lot 06", "TYPE_3_VILLA", 1452, 207, 181, 484),
  createHotspot("lot-07", "Lot 07", "TYPE_3_VILLA", 1674, 207, 187, 484),
  createHotspot("lot-08", "Lot 08", "TYPE_5_VILLA", 1902, 207, 224, 484),
  createHotspot("lot-09", "Lot 09", "TYPE_5_VILLA", 2167, 207, 239, 484),
  createHotspot("lot-10", "Lot 10", "TYPE_3_VILLA", 2433, 207, 179, 484),
  createHotspot("lot-11", "Lot 11", "TYPE_3_VILLA", 2652, 207, 178, 484),
  createHotspot("lot-12", "Lot 12", "TYPE_5_VILLA", 2871, 207, 220, 484),
  createHotspot("lot-13", "Lot 13", "TYPE_5_VILLA", 3118, 207, 245, 484),
  createHotspot("lot-14", "Lot 14", "TYPE_3_VILLA", 3688, 207, 170, 484),
  createHotspot("lot-15", "Lot 15", "TYPE_3_VILLA", 3885, 207, 186, 484),
  createHotspot("lot-16", "Lot 16", "TYPE_5_VILLA", 4098, 207, 234, 484),
  createHotspot("lot-17", "Lot 17", "TYPE_1_VILLA", 4359, 215, 318, 476),
  createHotspot("lot-18", "Lot 18", "TYPE_1_VILLA", 4704, 215, 318, 476),
  createHotspot("lot-19", "Lot 19", "TYPE_5_VILLA", 5044, 207, 238, 484),
  createHotspot("lot-20", "Lot 20", "TYPE_5_VILLA", 5309, 207, 250, 463),
  createHotspot("lot-04", "Lot 04", "TYPE_4_VILLA", 1012, 585, 355, 362),
  createHotspot("lot-03", "Lot 03", "TYPE_4_VILLA", 1012, 974, 355, 362),
  createHotspot("lot-23", "Lot 23", "TYPE_4_VILLA", 4507, 974, 355, 362),
  createHotspot("lot-34", "Lot 34", "TYPE_1_VILLA", 1660, 999, 466, 336),
  createHotspot("lot-33", "Lot 33", "TYPE_1_VILLA", 1660, 1362, 466, 337),
  createHotspot("lot-24", "Lot 24", "TYPE_4_VILLA", 4507, 1362, 355, 363),
  createHotspot("lot-02", "Lot 02", "TYPE_2_VILLA", 1012, 1363, 355, 404),
  createHotspot("lot-32", "Lot 32", "TYPE_1_VILLA", 1655, 1725, 307, 490),
  createHotspot("lot-31", "Lot 31", "TYPE_1_VILLA", 1989, 1725, 307, 490),
  createHotspot("lot-30", "Lot 30", "TYPE_5_VILLA", 2338, 1751, 232, 464),
  createHotspot("lot-29", "Lot 29", "TYPE_1_VILLA", 2597, 1738, 307, 490),
  createHotspot("lot-28", "Lot 28", "TYPE_1_VILLA", 2931, 1738, 307, 490),
  createHotspot("lot-27", "Lot 27", "TYPE_1_VILLA", 3963, 1738, 318, 477),
  createHotspot("lot-26", "Lot 26", "TYPE_5_VILLA", 4308, 1751, 230, 464),
  createHotspot("lot-25", "Lot 25", "TYPE_1_VILLA", 4564, 1751, 307, 464),
  createHotspot("lot-01", "Lot 01", "TYPE_2_VILLA", 1012, 1794, 355, 403),
  createHotspot("lot-46", "Lot 46", "TYPE_4_VILLA", 954, 2574, 355, 363),
  createHotspot("lot-35", "Lot 35", "TYPE_4_VILLA", 2834, 2574, 355, 363),
  createHotspot("lot-45", "Lot 45", "TYPE_2_VILLA", 954, 2963, 355, 382),
  createHotspot("lot-36", "Lot 36", "TYPE_4_VILLA", 2834, 2963, 355, 344),
  createHotspot("lot-43", "Lot 43", "TYPE_6_VILLA", 1414, 3287, 214, 409),
  createHotspot("lot-42", "Lot 42", "TYPE_6_VILLA", 1655, 3287, 215, 409),
  createHotspot("lot-41", "Lot 41", "TYPE_6_VILLA", 1897, 3287, 213, 409),
  createHotspot("lot-40", "Lot 40", "TYPE_6_VILLA", 2124, 3287, 214, 409),
  createHotspot("lot-39", "Lot 39", "TYPE_6_VILLA", 2356, 3287, 214, 409),
  createHotspot("lot-38", "Lot 38", "TYPE_6_VILLA", 2592, 3288, 215, 408),
  createHotspot("lot-37", "Lot 37", "TYPE_4_VILLA", 2834, 3333, 355, 363),
];
