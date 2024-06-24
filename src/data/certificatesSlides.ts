import certImagesSet from '../img/about/certificates/certificates';
import { ISlide } from '../types/slider';

const certificatesSlides: ISlide[] = [
    {
        id: 1,
        title: 'Сертификат HTML Academy о прохождении курса по верстке. На курсе разбирались основы верстки и стилизации на чистых HTML и CSS. В качестве итогового проекта верстался сайт магазина мороженого.',
        image: certImagesSet.certLayout,
    },
    {
        id: 2,
        title: 'Сертификат HTML Academy о прохождении курса по адаптивной верстке и автоматизации. Курс рассчитан на развитие навыков верстки с использованием препроцессоров CSS и погружение в адаптивную верску по приципу mobile first. Итоговый проект - сайт магазина питания для котов.',
        image: certImagesSet.certAdaptLayout,
    },
    {
        id: 3,
        title: 'Сертификат HTML Academy о прохождении курса по JavaScript. В ходе курса были разобраны основы JavaScript на примере сайта для публикации и редактирования фотографий.',
        image: certImagesSet.certJS,
    },
];

export default certificatesSlides;
