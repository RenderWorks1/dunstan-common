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
    name: "3 Bed South Entry",
    beds: 3,
    baths: 2,
    garage: "Double",
    features: ["South entry", "Spacious living", "Double garage"],
    floorplan: "/unit-type-images/type1v2.png",
    pdf: "/floorplans/type1.pdf",
  },
  {
    name: "3 Bed Side Entry",
    beds: 3,
    baths: 2,
    garage: "Single",
    features: ["Side entry", "Open living", "Efficient layout"],
    floorplan: "/unit-type-images/type2.png",
    pdf: "/floorplans/type2.pdf",
  },
  {
    name: "2 Bed South Entry Duplex",
    beds: 2,
    baths: 1,
    garage: "Single",
    features: ["Duplex design", "South entry", "Compact living"],
    floorplan: "/unit-type-images/type3.png",
    pdf: "/floorplans/type3.pdf",
  },
  {
    name: "2 Bed North Entry",
    beds: 2,
    baths: 1,
    garage: "Single",
    features: ["North entry", "Low maintenance", "Efficient layout"],
    floorplan: "/unit-type-images/type4v2.png",
    pdf: "/floorplans/type4.pdf",
  },
  {
    name: "2 Bed South Entry",
    beds: 2,
    baths: 1,
    garage: "Single",
    features: ["South entry", "Standalone home", "Compact design"],
    floorplan: "/unit-type-images/type5.png",
    pdf: "/floorplans/type5.pdf",
  },
  {
    name: "2 Bed North Entry Duplex",
    beds: 2,
    baths: 1,
    garage: "Single",
    features: ["North entry", "Duplex design", "Efficient living"],
    floorplan: "/unit-type-images/type6.png",
    pdf: "/floorplans/type6.pdf",
  },
];
