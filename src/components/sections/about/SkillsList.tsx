import React from "react";
import styled from "styled-components";
import { colors } from "../../../global/colors";
import * as icons from "../../../img/skills-icons";

const SKILLS = [
  { title: "HTML", icon: icons.htmlIcon },
  { title: "CSS", icon: icons.cssIcon },
  { title: "JavaScript", icon: icons.jsIcon },
  { title: "TypeScript", icon: icons.tsIcon },
  { title: "React", icon: icons.reactIcon },
  { title: "Redux", icon: icons.reduxIcon },
];

const StyledSkillsList = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
  max-width: 870px;

  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 180px;
    padding: 10px 20px;
    border-radius: 30px;
    background-color: ${colors.mainBackground};
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    user-select: none;
  }

  & img {
    width: 96px;
    height: 96px;
    margin-bottom: 10px;
  }
`;

const SkillsList = () => {
  return (
    <StyledSkillsList>
      {SKILLS.map((skill) => (
        <li key={skill.title}>
          <img src={skill.icon} alt={skill.title} />
          {skill.title}
        </li>
      ))}
    </StyledSkillsList>
  );
};

export default SkillsList;
