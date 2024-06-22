import styled from 'styled-components';
import colors from '../../../global/colors';
import { ReactComponent as htmlIcon } from '../../../img/svg/html.svg';
import { ReactComponent as cssIcon } from '../../../img/svg/css.svg';
import { ReactComponent as jsIcon } from '../../../img/svg/js.svg';
import { ReactComponent as tsIcon } from '../../../img/svg/ts.svg';
import { ReactComponent as reactIcon } from '../../../img/svg/react.svg';
import { ReactComponent as reduxIcon } from '../../../img/svg/redux.svg';
import fonts from '../../../global/fonts';
import viewports from '../../../global/viewports';

const skills = [
    { title: 'HTML', icon: htmlIcon },
    { title: 'CSS', icon: cssIcon },
    { title: 'JavaScript', icon: jsIcon },
    { title: 'TypeScript', icon: tsIcon },
    { title: 'React', icon: reactIcon },
    { title: 'Redux', icon: reduxIcon },
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
        box-shadow: 0 5px 10px 0 rgba(0 0 0 / 50%);
        user-select: none;
        font-family: ${fonts.mainFont};
        font-weight: 400;
    }

    svg {
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

        svg {
            width: 64px;
            height: 64px;
        }
    }
`;

const SkillsList = () => (
    <StyledSkillsList>
        {skills.map((skill) => (
            <li key={skill.title}>
                <skill.icon />
                {skill.title}
            </li>
        ))}
    </StyledSkillsList>
);

export default SkillsList;
