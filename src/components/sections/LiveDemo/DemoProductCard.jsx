import { useState } from "react";
import { useDemoCartStore } from "../../../store/demoCartStore";
import { formatWon } from "../../../utils/demoCart";
import * as S from "./LiveDemo.styles";

export default function DemoProductCard({ product }) {
  const addItem = useDemoCartStore((state) => state.addItem);

  const [quantity, setQuantity] = useState(1);
  const [option, setOption] = useState(product.options[0]);
  const [visitDate, setVisitDate] = useState("");
  const [time, setTime] = useState(product.times?.[0] ?? "");

  const needsDate = product.type !== "goods";

  const unitPrice = product.optionPrices?.[option] ?? product.price;

  const handleSubmit = (event) => {
    event.preventDefault();

    addItem({
      id: product.id,
      type: product.type,
      name: product.name,
      price: unitPrice,
      imageUrl: product.imageUrl,
      emoji: product.emoji,
      quantity,
      option,
      visitDate: needsDate ? visitDate : null,
      time: product.type === "experience" ? time : null,
    });
  };

  return (
    <S.ProductCard>
      {product.imageUrl ? (
        <S.ProductImage
          src={product.imageUrl}
          alt={product.name}
          $isTicket={product.type === "ticket"}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <S.Note>상품 이미지 준비 중</S.Note>
      )}

      <S.ProductName>{product.name}</S.ProductName>
      <S.Price>{formatWon(unitPrice)}</S.Price>

      <S.ProductForm onSubmit={handleSubmit}>
        <S.Field>
          옵션
          <select
            value={option}
            onChange={(event) => setOption(event.target.value)}
          >
            {product.options.map((value) => (
              <option key={value} value={value}>
                {value}
                {product.optionPrices
                  ? ` · ${formatWon(product.optionPrices[value])}`
                  : ""}
              </option>
            ))}
          </select>
        </S.Field>

        {needsDate && (
          <S.DateField>
            <S.DateLabel>
              <span aria-hidden="true">📅</span>
              방문일 선택
            </S.DateLabel>

            <S.DateInput
              type="date"
              required
              value={visitDate}
              onChange={(event) => setVisitDate(event.target.value)}
            />
          </S.DateField>
        )}

        {product.times && (
          <S.Field>
            체험 시간
            <select
              value={time}
              onChange={(event) => setTime(event.target.value)}
            >
              {product.times.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </S.Field>
        )}

        <S.QuantityControl>
          <S.SmallButton
            type="button"
            disabled={quantity === 1}
            aria-label={`${product.name} 담을 수량 감소`}
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
          >
            −
          </S.SmallButton>

          <span aria-label={`담을 수량 ${quantity}개`}>{quantity}</span>

          <S.SmallButton
            type="button"
            aria-label={`${product.name} 담을 수량 증가`}
            onClick={() => setQuantity((value) => value + 1)}
          >
            +
          </S.SmallButton>
        </S.QuantityControl>

        <S.PrimaryButton type="submit">장바구니 담기</S.PrimaryButton>
      </S.ProductForm>
    </S.ProductCard>
  );
}
