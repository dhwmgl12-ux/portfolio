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
    price: 25000,
    emoji: "🦁",
    options: ["종일권"],
  },
  {
    id: 3,
    type: "ticket",
    name: "소인 입장권",
    price: 18000,
    emoji: "🐼",
    options: ["종일권"],
  },
  {
    id: 1,
    type: "experience",
    name: "펭귄 먹이주기",
    price: 18000,
    emoji: "🐧",
    options: ["기본 체험"],
    times: ["11:00", "14:00"],
  },
  {
    id: 2,
    type: "experience",
    name: "동물 생태 이야기",
    price: 12000,
    emoji: "🦒",
    options: ["기본 체험"],
    times: ["13:00", "15:00"],
  },
  {
    id: 1,
    type: "goods",
    name: "레서판다 인형",
    price: 15000,
    emoji: "🧸",
    options: ["소형", "대형"],
  },
  {
    id: 2,
    type: "goods",
    name: "ZooLeaf 에코백",
    price: 12000,
    emoji: "🛍️",
    options: ["아이보리", "그린"],
  },
];
