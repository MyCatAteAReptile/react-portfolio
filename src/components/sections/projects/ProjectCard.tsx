import React from 'react';
import styled from "styled-components";
import { colors } from "../../../global/colors";
import { IProject } from "../../../types/project";
import { ReactComponent as GithubIcon }  from "../../../img/svg/github-icon.svg";
import { ReactComponent as LinkIcon }  from "../../../img/svg/link-icon.svg";
import { viewports } from '../../../global/viewports';

const StyledProjectCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    background-color: ${colors.lightBackground};
    width: 400px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);

    &:hover img {
      filter: grayscale(60%);
    }

    &:hover .buttons, &:focus-within .buttons {
      z-index: 100;
    }

    .buttons {
      display: flex;
      position: absolute;
      z-index: -1;
      top: 20px;
      left: 5%;
      width: 90%;
      justify-content: space-between;

      a {
        display: flex;
        padding: 7px;
        background-color: ${colors.UIBackground};
        border-radius: 50%;
        outline: none;

        &:hover {
          opacity: 0.7;
        }

        &:active, &:focus-visible {
          opacity: 0.5;
        }
      }

      svg {
        display: block;
        margin: 0 auto;
        width: 38px;
        height: 38px;
        fill: ${colors.mainFont};
        stroke: ${colors.mainFont};
      }
    }

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      object-position: 50% 0%;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
    }

    p {
      margin: 0;
      padding: 20px;
      font-weight: 700;
      text-align: center;
      border-top: 3px solid ${colors.UIBackground};
    }

    @media ${viewports.tablet} {
      width: 688px;

      .buttons {
        z-index: 100;
      }
    }

    @media ${viewports.mobile} {
      width: 300px;

      .buttons {
        svg {
          width: 24px;
          height: 24px;
        }
      }
    }
`;

interface ProjectCardProps {
  title: string,
  image: string,
  link?: string,
  githubLink?: string
};

const ProjectCard = ({ title, image, link, githubLink }: ProjectCardProps) => {
  return (
    <StyledProjectCard>
      <div className='buttons'>
        <a href={githubLink} aria-label="Ссылка на репозиторий проекта."><GithubIcon /></a>
        <a href={link} aria-label="Ссылка на проект."><LinkIcon /></a>
      </div>
      <img src={image} alt={`Скриншот проекта '${title}'`} />
      <p>{title}</p>
    </StyledProjectCard>
  )
}

export default ProjectCard