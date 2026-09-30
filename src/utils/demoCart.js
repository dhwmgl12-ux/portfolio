export const formatWon = (amount) => `${amount.toLocaleString("ko-KR")}원`;

export const getDemoItemKey = (item) =>
  JSON.stringify([
    item.type,
    String(item.id),
    item.option ?? null,
    item.visitDate ?? null,
    item.time ?? null,
  ]);

export function addDemoItem(items, newItem) {
  if (!Number.isInteger(newItem.quantity) || newItem.quantity < 1) {
    return items;
  }

  const key = getDemoItemKey(newItem);
  const exists = items.some((item) => item.key === key);

  if (!exists) {
    return [...items, { ...newItem, key }];
  }

  return items.map((item) =>
    item.key === key
      ? { ...item, quantity: item.quantity + newItem.quantity }
      : item,
  );
}

export function calculateDemoAmounts(items, usePartnerDiscount) {
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shippingFee = items.some((item) => item.type === "goods") ? 3000 : 0;

  let discount = 0;

  if (usePartnerDiscount) {
    let remaining = 2;

    // ZooLeaf의 제휴 할인과 동일하게 대인 → 소인 순으로 적용합니다.
    const eligibleItems = items
      .filter(
        (item) => item.type === "ticket" && [1, 3].includes(Number(item.id)),
      )
      .sort((a, b) => Number(a.id) - Number(b.id));

    for (const item of eligibleItems) {
      const quantity = Math.min(item.quantity, remaining);
      discount += Math.floor(item.price * 0.5) * quantity;
      remaining -= quantity;

      if (remaining === 0) break;
    }
  }

  return {
    count,
    subtotal,
    shippingFee,
    discount,
    total: subtotal - discount + shippingFee,
  };
}
