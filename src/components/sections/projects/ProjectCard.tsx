import styled from 'styled-components';
import colors from '../../../global/colors';
import { ReactComponent as EyeIcon } from '../../../img/svg/eye.svg';
import { ReactComponent as CodeBracketIcon } from '../../../img/svg/code-bracket.svg';
import viewports from '../../../global/viewports';
import { IImage } from '../../../types/image';
import CustomPicture from '../../UI/picture/CustomPicture';

const StyledProjectCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    background-color: ${colors.lightBackground};
    width: 400px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);

    &:hover,
    &:focus-within {
        .wrapper::before {
            display: block;
        }

        .buttons {
            z-index: 1;
        }
    }

    .wrapper {
        position: relative;
    }

    .wrapper::before {
        content: '';
        display: none;
        position: absolute;
        top: -1px;
        left: -1px;
        //добавил несколько пикселей к размерам чтобы скрыть выступающие пиксели светлых изображений на скругленных краях сверху
        width: calc(100% + 2px);
        height: calc(100% + 1px);
        background-color: rgba(0, 0, 0, 0.9);
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
    }

    .buttons {
        display: flex;
        z-index: -1;
        position: absolute;
        top: 50%;
        left: 10%;
        width: 80%;
        transform: translateY(-50%);
        justify-content: space-between;

        a {
            display: flex;
            padding: 7px;
            background-color: transparent;
            border-radius: 50%;
            outline: none;
            width: 35%;
            color: ${colors.mainFont};

            &:hover svg {
                stroke: ${colors.UIBackground};
            }

            &:focus {
                outline-offset: 2px;
                outline: 2px solid ${colors.mainFont};
            }

            &:active {
                outline: none;
                opacity: 0.5;
            }
        }

        svg {
            display: block;
            margin: 0 auto;
            stroke: ${colors.mainFont};
        }
    }

    img {
        display: block;
        width: 100%;
        height: 300px;
        object-fit: cover;
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
    }

    @media ${viewports.mobile} {
        width: 300px;

        img {
            width: 300px;
            height: 225px;
        }
    }
`;

interface ProjectCardProps {
    title: string;
    image: IImage;
    link?: string;
    githubLink?: string;
}

const ProjectCard = ({ title, image, link, githubLink }: ProjectCardProps) => (
    <StyledProjectCard>
        <div className="wrapper">
            <div className="buttons">
                <a
                    href={githubLink}
                    aria-label={`Ссылка на репозиторий проекта ${title}.`}
                    target="_self"
                >
                    <CodeBracketIcon />
                </a>
                <a
                    href={link}
                    aria-label={`Ссылка на проект ${title}.`}
                    target="_self"
                >
                    <EyeIcon />
                </a>
            </div>
            <CustomPicture image={image} />
        </div>
        <p>{title}</p>
    </StyledProjectCard>
);

export default ProjectCard;
