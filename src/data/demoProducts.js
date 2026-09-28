import adultImage from "../assets/products/ticket-adult.webp";
import childImage from "../assets/products/ticket-child.webp";
import feedingImage from "../assets/products/giraffe-feeding.webp";
import keeperImage from "../assets/products/junior-keeper.webp";
import pandaImage from "../assets/products/red-panda.webp";
import bagImage from "../assets/products/eco-bag.webp";

export const demoCategories = [
  { id: "ticket", label: "입장권" },
  { id: "experience", label: "체험" },
  { id: "goods", label: "굿즈" },
];

export const demoProducts = [
  {
    id: 1,
    type: "ticket",
    name: "대인 입장권",
    price: 32000,
    imageUrl: adultImage,
    options: ["종일권"],
  },
  {
    id: 3,
    type: "ticket",
    name: "소인 입장권",
    price: 22000,
    imageUrl: childImage,
    options: ["종일권"],
  },
  {
    id: 1,
    type: "experience",
    name: "기린 먹이주기 체험",
    price: 18000,
    imageUrl: feedingImage,
    options: ["기본 체험"],
    times: ["11:00", "14:00"],
  },
  {
    id: 2,
    type: "experience",
    name: "주니어 사육사 체험",
    price: 12000,
    imageUrl: keeperImage,
    options: ["기본 체험"],
    times: ["13:00", "15:00"],
  },
  {
    id: 1,
    type: "goods",
    name: "레서판다 인형",
    price: 15000,
    imageUrl: pandaImage,
    options: ["소형", "대형"],
    optionPrices: {
      소형: 10000,
      대형: 25000,
    },
  },
  {
    id: 2,
    type: "goods",
    name: "ZooLeaf 에코백",
    price: 12000,
    imageUrl: bagImage,
    options: ["아이보리", "그린"],
  },
];
