import { skillExperiences } from "../../../data/skills";
import * as S from "./Skills.styles";

export default function Skills() {
  return (
    <S.Section id="skills" aria-labelledby="skills-title">
      <S.Inner>
        <S.Eyebrow>09 / SKILLS & EXPERIENCE</S.Eyebrow>

        <S.Title id="skills-title">기술 스택 & 사용 경험</S.Title>

        <S.Introduction>
          ZooLeaf에서 직접 담당한 장바구니, 마이페이지, 404 페이지를 구현하며
          사용한 기술입니다.
        </S.Introduction>

        <S.SkillList>
          {skillExperiences.map((skill) => (
            <S.SkillCard key={skill.id}>
              <S.CardHeader>
                <S.Icon aria-hidden="true">{skill.icon}</S.Icon>

                <div>
                  <S.Category>{skill.category}</S.Category>
                  <S.SkillName>{skill.name}</S.SkillName>
                </div>
              </S.CardHeader>

              <S.Description>{skill.description}</S.Description>

              <S.ExampleList>
                {skill.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </S.ExampleList>

              <S.Evidence>
                <span>사용 근거</span>
                <p>{skill.evidence}</p>
              </S.Evidence>
            </S.SkillCard>
          ))}
        </S.SkillList>
      </S.Inner>
    </S.Section>
  );
}
