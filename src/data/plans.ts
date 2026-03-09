export type Plan = {
  name: string;
  beds?: number;
  baths?: number;
  garage?: string;
  features: string[];
  floorplan: string;
  pdf: string;
};

export const plans: Plan[] = [
  {
    name: "Type 1 Villa",
    beds: 3,
    baths: 2,
    garage: "Double",
    features: ["South entry", "Spacious living", "Double garage"],
    floorplan: "/images/floorplans/type1.jpg",
    pdf: "/floorplans/type1.pdf",
  },
  {
    name: "Type 2 Villa",
    beds: 3,
    baths: 2,
    garage: "Single",
    features: ["Side entry", "Open living", "Efficient layout"],
    floorplan: "/images/floorplans/type2.jpg",
    pdf: "/floorplans/type2.pdf",
  },
  {
    name: "Type 3 Villa",
    beds: 2,
    baths: 1,
    garage: "Single",
    features: ["Duplex design", "South entry", "Compact living"],
    floorplan: "/images/floorplans/type3.jpg",
    pdf: "/floorplans/type3.pdf",
  },
  {
    name: "Type 4 Villa",
    beds: 2,
    baths: 1,
    garage: "Single",
    features: ["North entry", "Low maintenance", "Efficient layout"],
    floorplan: "/images/floorplans/type4.jpg",
    pdf: "/floorplans/type4.pdf",
  },
  {
    name: "Type 5 Villa",
    beds: 2,
    baths: 1,
    garage: "Single",
    features: ["South entry", "Standalone home", "Compact design"],
    floorplan: "/images/floorplans/type5.jpg",
    pdf: "/floorplans/type5.pdf",
  },
  {
    name: "Type 6 Villa",
    beds: 2,
    baths: 1,
    garage: "Single",
    features: ["North entry", "Duplex design", "Efficient living"],
    floorplan: "/images/floorplans/type6.jpg",
    pdf: "/floorplans/type6.pdf",
  },
];
