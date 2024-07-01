import styled from 'styled-components';
import colors from '../../../global/colors';
import presentationImagesSet from '../../../img/about/presentation/presentation';
import fonts from '../../../global/fonts';
import { ReactComponent as ListIcon } from '../../../img/svg/academic-cap.svg';
import viewports from '../../../global/viewports';
import CustomPicture from '../../UI/picture/CustomPicture';

const StyledPresentation = styled.div`
    display: grid;
    padding: 40px;
    grid-template-columns: 350px 1fr;
    place-items: center;
    justify-content: center;
    gap: 70px;
    font-family: ${fonts.mainFont};
    background-color: ${colors.mainBackground};
    border-radius: 30px;
    box-shadow: 0 5px 10px 0 rgba(0 0 0 / 50%);

    h2 {
        font-weight: 900;
    }

    h3 {
        font-weight: 700;
    }

    p {
        font-weight: 400;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
            display: grid;
            grid-template-columns: 30px 1fr;
            column-gap: 15px;
            margin-bottom: 1.5rem;
            align-items: center;

            .title {
                font-style: italic;
            }
        }

        svg {
            width: 30px;
            height: 30px;
        }
    }

    img {
        width: 280px;
        height: 280px;
        object-fit: cover;
        border-radius: 30px;
    }

    @media ${viewports.tablet} {
        grid-template-columns: 1fr;
        gap: 30px;

        h2,
        h3 {
            text-align: center;
        }

        picture {
            display: none;
        }
    }

    @media ${viewports.mobile} {
        padding: 10px;

        picture {
            display: block;
        }
    }
`;

const Presentation = () => (
    <StyledPresentation>
        <CustomPicture image={presentationImagesSet.pc} />
        <div>
            <h2>Обо мне</h2>
            <p>
                Я&nbsp;веб-разработчик и&nbsp;мне нравится создавать интересные
                и&nbsp;удобные приложения. Я&nbsp;использую HTML, CSS,
                JavaScript, TypeScript, React, Redux.
            </p>
            <h3>Образование</h3>
            <ul>
                <li>
                    <ListIcon />
                    <span>
                        Высшее техническое образование
                        <br />
                        <span className="title">
                            Уральский Федеральный Университет
                        </span>
                    </span>
                </li>
                <li>
                    <ListIcon />
                    <span>
                        Курс Фронтенд-разработки
                        <br />
                        <span className="title">HTML Academy</span>
                    </span>
                </li>
            </ul>
        </div>
    </StyledPresentation>
);

export default Presentation;
