import { skillExperiences } from "../../../data/skills";
import * as S from "./Skills.styles";

export default function Skills() {
  return (
    <S.Section id="skills" aria-labelledby="skills-title">
      <S.Inner>
        <S.Eyebrow>09 / SKILLS & EXPERIENCE</S.Eyebrow>
        <S.Title id="skills-title">기술 스택 & 사용 경험</S.Title>

        <S.SkillList>
          {skillExperiences.map((skill) => (
            <S.SkillCard key={skill.id}>
              <S.SkillName>{skill.name}</S.SkillName>
              <S.Description>{skill.description}</S.Description>
            </S.SkillCard>
          ))}
        </S.SkillList>
      </S.Inner>
    </S.Section>
  );
}
