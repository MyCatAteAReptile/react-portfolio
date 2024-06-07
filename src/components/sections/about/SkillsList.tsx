import React from "react";
import styled from "styled-components";
import { colors } from "../../../global/colors";
import * as icons from "../../../img/skills-icons";
import { fonts } from "../../../global/fonts";
import { viewports } from "../../../global/viewports";

const SKILLS = [
  { title: "HTML", icon: icons.htmlIcon, iconWebp: icons.htmlIconWebp},
  { title: "CSS", icon: icons.cssIcon, iconWebp: icons.cssIconWebp },
  { title: "JavaScript", icon: icons.jsIcon, iconWebp: icons.jsIconWebp },
  { title: "TypeScript", icon: icons.tsIcon, iconWebp: icons.tsIconWebp },
  { title: "React", icon: icons.reactIcon, iconWebp: icons.reactIconWebp },
  { title: "Redux", icon: icons.reduxIcon, iconWebp: icons.reduxIconWebp },
];

const StyledSkillsList = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
  max-width: 870px;

  li {
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
    font-family: ${fonts.mainFont};
    font-weight: 400;
  }

  img {
    width: 96px;
    height: 96px;
    margin-bottom: 0.6rem;
  }

  @media ${viewports.mobile} {
    padding: 20px 0;

    li {
      width: 120px;
      height: 120px;
      border-radius: 25px;
    }

    img {
      width: 64px;
      height: 64px;
    }
  }
`;

const SkillsList = () => {
  return (
    <StyledSkillsList>
      {SKILLS.map((skill) => (
        <li key={skill.title}>
          <picture>
            <source type="image/webp" srcSet={skill.iconWebp} width="96" height="96"/>
            <source type="image/webp" media={viewports.mobile} srcSet={skill.iconWebp} width="64" height="64"/>
            <img src={skill.icon} width="96" height="96" alt=""/>
          </picture>
          {skill.title}
        </li>
      ))}
    </StyledSkillsList>
  );
};

export default SkillsList;
