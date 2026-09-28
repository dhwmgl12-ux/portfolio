import { useState } from "react";
import { thinkingItems } from "../../../data/howIThink";
import * as S from "./HowIThink.styles";

export default function HowIThink() {
  const [activeId, setActiveId] = useState(thinkingItems[0].id);

  const activeItem = thinkingItems.find((item) => item.id === activeId);

  return (
    <S.Section aria-labelledby="thinking-title">
      <S.Inner>
        <S.QuestionColumn>
          <S.Eyebrow>06 / HOW I THINK</S.Eyebrow>

          <S.Title id="thinking-title">왜 이런 방식으로 구현했을까요?</S.Title>

          <S.QuestionList>
            {thinkingItems.map((item) => (
              <li key={item.id}>
                <S.QuestionHeading>
                  <S.QuestionButton
                    type="button"
                    aria-expanded={activeId === item.id}
                    aria-controls={`thinking-answer-${item.id}`}
                    onClick={() => setActiveId(item.id)}
                  >
                    <span aria-hidden="true">💡</span>
                    <span>{item.question}</span>
                    <S.Chevron aria-hidden="true">
                      {activeId === item.id ? "−" : "+"}
                    </S.Chevron>
                  </S.QuestionButton>
                </S.QuestionHeading>

                <S.Answer
                  id={`thinking-answer-${item.id}`}
                  hidden={activeId !== item.id}
                >
                  {item.summary}
                </S.Answer>
              </li>
            ))}
          </S.QuestionList>
        </S.QuestionColumn>

        <S.CodePanel aria-labelledby="code-peek-title">
          <S.CodeNavigation role="group" aria-label="코드 주제 선택">
            {thinkingItems.map((item) => (
              <S.CodeButton
                key={item.id}
                type="button"
                aria-pressed={activeId === item.id}
                onClick={() => setActiveId(item.id)}
              >
                {item.category}
              </S.CodeButton>
            ))}
          </S.CodeNavigation>

          <S.CodeHeader>
            <h3 id="code-peek-title">{activeItem.category}</h3>
            <S.SourceBadge>{activeItem.source}</S.SourceBadge>
          </S.CodeHeader>

          <S.FileName>{activeItem.file}</S.FileName>

          <S.CodeBlock
            tabIndex={0}
            aria-label={`${activeItem.category} 코드, 가로 스크롤 가능`}
          >
            <code>{activeItem.code}</code>
          </S.CodeBlock>

          <S.CodeFooter>
            <a
              href={activeItem.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${activeItem.category} ZooLeaf 원본 코드 보기 (새 탭)`}
            >
              ZooLeaf 코드 보러가기 ↗
            </a>
          </S.CodeFooter>
        </S.CodePanel>

        <S.DecisionCard aria-labelledby="decision-title">
          <S.DecisionIcon aria-hidden="true">💡</S.DecisionIcon>

          <S.DecisionTitle id="decision-title">
            이렇게 판단했습니다.
          </S.DecisionTitle>

          <S.DecisionText>{activeItem.decision}</S.DecisionText>

          <S.Tradeoff>
            <h4>함께 고려한 점</h4>
            <p>{activeItem.tradeoff}</p>
          </S.Tradeoff>
        </S.DecisionCard>
      </S.Inner>
    </S.Section>
  );
}
