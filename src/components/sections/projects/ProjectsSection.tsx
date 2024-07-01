import { useState } from 'react';
import styled from 'styled-components';
import colors from '../../../global/colors';
import Container from '../../Container';
import ProjectCard from './ProjectCard';
import fonts from '../../../global/fonts';
import { ReactComponent as GithubIcon } from '../../../img/svg/github.svg';
import viewports from '../../../global/viewports';
import CustomLink from '../../UI/link/CustomLink';
import tags from '../../../data/tags';
import projects from '../../../data/projects';

const StyledCustomLink = styled(CustomLink)`
    /* переменная для позиционирования CustomLink в StyledProjectSection */
`;

const StyledProjectSection = styled.section`
    padding: 40px 0;
    background-color: ${colors.mainBackground};
    font-family: ${fonts.mainFont};

    h2 {
        font-size: 2rem;
        font-weight: 900;
        text-align: center;
        margin: 0;
        margin-bottom: 2.5rem;
    }

    ul {
        list-style: none;
        margin: 0;
        margin-bottom: 2rem;
        padding: 30px 0;
        display: grid;
        grid-template-columns: max-content max-content;
        gap: 50px 100px;
        justify-items: center;
        justify-content: center;

        li {
            width: min-content;
        }
    }

    ${StyledCustomLink} {
        margin: 0 auto;
    }

    @media ${viewports.tablet} {
        ul {
            grid-template-columns: max-content;
        }
    }

    @media ${viewports.mobile} {
        ul {
            row-gap: 30px;
            margin-bottom: 0;
        }
    }
`;

const ProjectTags = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 1.5rem;
`;

const Button = styled.button<{ $isSelected?: boolean }>`
    margin: 0;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: ${colors.UIBackground};
    color: ${colors.black};
    box-shadow: ${(props) =>
        props.$isSelected
            ? '0px 5px 10px 0px rgba(226, 154, 5, 0.5)'
            : '0px 5px 10px 0px rgba(0, 0, 0, 0.5)'};
    font-family: ${fonts.mainFont};
    font-weight: 700;
    font-size: 1.1rem;

    &:hover {
        background-color: ${colors.mainFont};
    }

    &:focus {
        outline-offset: 2px;
        outline: 2px solid ${colors.mainFont};
    }

    &:active {
        transform: translateY(4px);
        box-shadow: none;
        outline: none;
    }
`;

const ProjectsSection = () => {
    const [tag, setTag] = useState(tags.all);

    const filteredProjects = projects.filter((project) =>
        project.tag.includes(tag),
    );

    return (
        <StyledProjectSection id="projects">
            <Container>
                <h2>Мои проекты</h2>
                <ProjectTags>
                    <Button
                        $isSelected={tag === tags.all}
                        onClick={() => setTag(tags.all)}
                    >
                        Все
                    </Button>
                    <Button
                        $isSelected={tag === tags['html-css']}
                        onClick={() => setTag(tags['html-css'])}
                    >
                        HTML/CSS
                    </Button>
                    <Button
                        $isSelected={tag === tags.react}
                        onClick={() => setTag(tags.react)}
                    >
                        React
                    </Button>
                </ProjectTags>
                <ul>
                    {filteredProjects.map((project) => (
                        <li key={project.id}>
                            <ProjectCard
                                title={project.title}
                                image={project.image}
                                link={project.link}
                                githubLink={project.githubLink}
                            />
                        </li>
                    ))}
                </ul>
                <StyledCustomLink
                    href="https://github.com/MyCatAteAReptile?tab=repositories"
                    target="_blank"
                >
                    <GithubIcon />
                    Все проекты на GitHub
                </StyledCustomLink>
            </Container>
        </StyledProjectSection>
    );
};

export default ProjectsSection;
