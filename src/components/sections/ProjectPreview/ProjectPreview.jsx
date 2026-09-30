import { Link } from "react-router-dom";
import { zooleafProject } from "../../../data/projects";
import * as S from "./ProjectPreview.styles";

export default function ProjectPreview() {
  return (
    <S.Section id="project" aria-labelledby="project-preview-title">
      <S.Inner>
        <S.Content>
          <S.Eyebrow>FEATURED PROJECT</S.Eyebrow>

          <S.Title id="project-preview-title">ZooLeaf</S.Title>

          <S.Description>동물원 예약 및 쇼핑 서비스</S.Description>

          <S.Contribution>
            담당: 장바구니 · 마이페이지 · 404 페이지
          </S.Contribution>

          <S.Description>
            상품을 담는 과정부터 주문 내역 관리까지 구현했습니다. 상세
            페이지에서 실제 화면, 장바구니 데모와 문제 해결 과정을 확인할 수
            있습니다.
          </S.Description>

          <S.DetailLink as={Link} to="/projects/zooleaf">
            프로젝트 상세 보기 →
          </S.DetailLink>
        </S.Content>

        <S.PreviewImage
          src={zooleafProject.screens[0].image}
          alt="ZooLeaf 메인 화면"
          loading="lazy"
          decoding="async"
        />
      </S.Inner>
    </S.Section>
  );
}
