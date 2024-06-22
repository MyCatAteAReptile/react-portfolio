import styled from 'styled-components';
import certImagesSet from '../../../img/about/certificates/certificates';
import Slider from '../../UI/slider/Slider';
import { ISlide } from '../../../types/slider';
import fonts from '../../../global/fonts';
import viewports from '../../../global/viewports';
import { IImageSet } from '../../../types/image';

const slidesImages: IImageSet = certImagesSet;

const slides: ISlide[] = [
    {
        id: 1,
        title: 'Сертификат HTML Academy о прохождении курса по верстке. На курсе разбирались основы верстки и стилизации на чистых HTML и CSS. В качестве итогового проекта верстался сайт магазина мороженого.',
        image: slidesImages.certLayout,
    },
    {
        id: 2,
        title: 'Сертификат HTML Academy о прохождении курса по адаптивной верстке и автоматизации. Курс рассчитан на развитие навыков верстки с использованием препроцессоров CSS и погружение в адаптивную верску по приципу mobile first. Итоговый проект - сайт магазина питания для котов.',
        image: slidesImages.certAdaptLayout,
    },
    {
        id: 3,
        title: 'Сертификат HTML Academy о прохождении курса по JavaScript. В ходе курса были разобраны основы JavaScript на примере сайта для публикации и редактирования фотографий.',
        image: slidesImages.certJS,
    },
];

const StyledCertificates = styled.div`
    margin: 0 auto;
    padding: 40px 0;
    font-family: ${fonts.mainFont};

    & h2 {
        font-weight: 900;
        text-align: center;
        margin: 0;
        margin-bottom: 2.5rem;
    }

    @media ${viewports.mobile} {
        padding: 20px 0;
    }
`;

const Certificates = () => (
    <StyledCertificates>
        <h2>Мои сертификаты</h2>
        <Slider slides={slides} />
    </StyledCertificates>
);

export default Certificates;
