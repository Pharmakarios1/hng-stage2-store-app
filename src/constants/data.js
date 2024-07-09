import {
  shop1,
  shop2,
  shop3,
  chair1,
  chair2,
  chair3,
  chair4,
  chair5,
  heart,
} from "../assets";

export const data = [
  {
    id: 1,
    desc: "Portrait of Home Shop The Entryway",
    img: shop1,
    type: "Living Room",
  },
  {
    id: 2,
    desc: "The Pride Room of a Home Shop The Living",
    img: shop2,
    type: "Bed Room",
  },
  {
    id: 3,
    desc: "Gather Together and Build Memories Shop The Dining",
    img: shop3,
    type: "Dining Room",
  },
];

export const chairs = [
  {
    id: 1,
    desc: "2 Seater Sofa Chair",
    img: chair1,
    name: "Lorenzo dining chair",
    heart: heart,
    price: "15,900",
    pricedec: "20,000",
  },
  {
    id: 2,
    desc: "2 Seater Sofa Chair",
    img: chair2,
    name: "Lorenzo dining chair",
    heart: heart,
    price: "15,900",
    pricedec: "20,000",
  },
  {
    id: 3,
    desc: "2 Seater Sofa Chair",
    img: chair3,
    name: "Lorenzo dining chair",
    heart: heart,
    price: "15,900",
    pricedec: "20,000",
  },
  {
    id: 4,
    desc: "2 Seater Sofa Chair",
    img: chair4,
    name: "Lorenzo dining chair",
    heart: heart,
    price: "15,900",
    pricedec: "20,000",
  },
  //   {
  //     id: 5,
  //     desc: "2 Seater Sofa Chair",
  //     img: chair5,
  //     name: "Lorenzo dining chair",
  //     heart: heart,
  //     price: "15,900",
  //   },
];

const defaultExport = { data, chairs };
export default defaultExport;
