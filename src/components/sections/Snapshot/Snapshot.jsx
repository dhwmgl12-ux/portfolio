import { snapshotItems } from "../../../data/snapshot";
import * as S from "./Snapshot.styles";

export default function Snapshot() {
  return (
    <S.SnapshotSection aria-labelledby="snapshot-title">
      <S.Eyebrow>01 / SNAPSHOT</S.Eyebrow>

      <S.Title id="snapshot-title">
        10초 만에 보는
        <br />
        프론트엔드 개발자 박형우
      </S.Title>

      <S.CardList>
        {snapshotItems.map((item) => (
          <S.Card key={item.id}>
            <S.Value>{item.value}</S.Value>
            <S.Label>{item.label}</S.Label>
            <S.Description>{item.description}</S.Description>
          </S.Card>
        ))}
      </S.CardList>
    </S.SnapshotSection>
  );
}
