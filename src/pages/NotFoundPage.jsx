import { Link } from "react-router-dom";
import * as S from "./NotFoundPage.styles";

export default function NotFoundPage() {
  return (
    <S.Page aria-labelledby="not-found-title">
      <S.Content>
        <S.ErrorCode>404</S.ErrorCode>

        <S.Title id="not-found-title">페이지를 찾을 수 없습니다.</S.Title>

        <S.Description>
          주소가 잘못되었거나 이동된 페이지입니다.
          <br />
          홈으로 돌아가 포트폴리오를 살펴보세요.
        </S.Description>

        <S.Actions>
          <S.PrimaryLink as={Link} to="/">
            홈으로 돌아가기
          </S.PrimaryLink>
        </S.Actions>
      </S.Content>
    </S.Page>
  );
}
