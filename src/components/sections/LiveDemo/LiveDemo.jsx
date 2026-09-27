import { useState } from "react";
import { demoCategories, demoProducts } from "../../../data/demoProducts";
import { useDemoCartStore } from "../../../store/demoCartStore";
import DemoProductCard from "./DemoProductCard";
import DemoCart from "./DemoCart";
import * as S from "./LiveDemo.styles";

export default function LiveDemo() {
  const [category, setCategory] = useState("ticket");
  const message = useDemoCartStore((state) => state.message);

  const products = demoProducts.filter((product) => product.type === category);

  return (
    <S.Section id="live-demo" aria-labelledby="live-demo-title">
      <S.Inner>
        <S.Heading>
          <S.Eyebrow>05 / LIVE DEMO</S.Eyebrow>
          <S.Title id="live-demo-title">장바구니를 직접 사용해보세요.</S.Title>
          <S.Note>
            ZooLeaf 장바구니 규칙을 재구성한 로컬 데모입니다. 상품과 가격은
            체험용이며 새로고침하면 초기화됩니다.
          </S.Note>
        </S.Heading>

        <S.Layout>
          <div>
            <S.CategoryGroup role="group" aria-label="상품 분류">
              {demoCategories.map((item) => (
                <S.CategoryButton
                  key={item.id}
                  type="button"
                  aria-pressed={category === item.id}
                  onClick={() => setCategory(item.id)}
                >
                  {item.label}
                </S.CategoryButton>
              ))}
            </S.CategoryGroup>

            <S.ProductGrid>
              {products.map((product) => (
                <DemoProductCard
                  key={`${product.type}-${product.id}`}
                  product={product}
                />
              ))}
            </S.ProductGrid>
          </div>

          <DemoCart />

          <S.RulePanel aria-labelledby="demo-rules-title">
            <h3 id="demo-rules-title">이렇게 확인해보세요</h3>
            <S.RuleList>
              <li>
                <strong>동일 상품 병합</strong>
                <p>같은 옵션·방문일·시간으로 두 번 담아보세요.</p>
              </li>
              <li>
                <strong>옵션이 다르면 별도 항목</strong>
                <p>방문일이나 굿즈 옵션을 바꿔 담아보세요.</p>
              </li>
              <li>
                <strong>굿즈가 있을 때만 배송비</strong>
                <p>굿즈를 담고 삭제하며 3,000원 변화를 확인하세요.</p>
              </li>
              <li>
                <strong>할인 대상과 수량 제한</strong>
                <p>입장권 3개를 담고 할인 체험을 켜보세요.</p>
              </li>
              <li>
                <strong>99+ 표시와 키보드 조작</strong>
                <p>수량 표시 체험 버튼과 Tab·Enter를 사용해보세요.</p>
              </li>
            </S.RuleList>
          </S.RulePanel>
        </S.Layout>

        <S.Status role="status" aria-live="polite" aria-atomic="true">
          {message}
        </S.Status>
      </S.Inner>
    </S.Section>
  );
}
