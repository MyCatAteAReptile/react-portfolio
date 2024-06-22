import { IImageSet } from '../../types/image';
import * as projectsImages from '.';

const projectsImagesSize = {
    desktop: {
        width: 400,
        height: 300,
    },
    tablet: {
        width: 688,
        height: 300,
    },
    mobile: {
        width: 300,
        height: 225,
    },
};

const projectsImagesSet: IImageSet = {
    portfolio: {
        desktop: {
            original: projectsImages.portfolioDesktop,
            originalHR: projectsImages.portfolioDesktopHR,
            webp: projectsImages.portfolioDesktopWebp,
            webpHR: projectsImages.portfolioDesktopWebpHR,
            width: projectsImagesSize.desktop.width,
            height: projectsImagesSize.desktop.height,
        },
        tablet: {
            original: projectsImages.portfolioTablet,
            originalHR: projectsImages.portfolioTabletHR,
            webp: projectsImages.portfolioTabletWebp,
            webpHR: projectsImages.portfolioTabletWebpHR,
            width: projectsImagesSize.tablet.width,
            height: projectsImagesSize.tablet.height,
        },
        mobile: {
            original: projectsImages.portfolioMobile,
            originalHR: projectsImages.portfolioMobileHR,
            webp: projectsImages.portfolioMobileWebp,
            webpHR: projectsImages.portfolioMobileWebpHR,
            width: projectsImagesSize.mobile.width,
            height: projectsImagesSize.mobile.height,
        },
        alt: 'Скриншот проекта Портфолио.',
    },
    fitness: {
        desktop: {
            original: projectsImages.fitnessDesktop,
            originalHR: projectsImages.fitnessDesktopHR,
            webp: projectsImages.fitnessDesktopWebp,
            webpHR: projectsImages.fitnessDesktopWebpHR,
            width: projectsImagesSize.desktop.width,
            height: projectsImagesSize.desktop.height,
        },
        tablet: {
            original: projectsImages.fitnessTablet,
            originalHR: projectsImages.fitnessTabletHR,
            webp: projectsImages.fitnessTabletWebp,
            webpHR: projectsImages.fitnessTabletWebpHR,
            width: projectsImagesSize.tablet.width,
            height: projectsImagesSize.tablet.height,
        },
        mobile: {
            original: projectsImages.fitnessMobile,
            originalHR: projectsImages.fitnessMobileHR,
            webp: projectsImages.fitnessMobileWebp,
            webpHR: projectsImages.fitnessMobileWebpHR,
            width: projectsImagesSize.mobile.width,
            height: projectsImagesSize.mobile.height,
        },
        alt: 'Скриншот проекта Фитнес.',
    },
    travels: {
        desktop: {
            original: projectsImages.travelsDesktop,
            originalHR: projectsImages.travelsDesktopHR,
            webp: projectsImages.travelsDesktopWebp,
            webpHR: projectsImages.travelsDesktopWebpHR,
            width: projectsImagesSize.desktop.width,
            height: projectsImagesSize.desktop.height,
        },
        tablet: {
            original: projectsImages.travelsTablet,
            originalHR: projectsImages.travelsTabletHR,
            webp: projectsImages.travelsTabletWebp,
            webpHR: projectsImages.travelsTabletWebpHR,
            width: projectsImagesSize.tablet.width,
            height: projectsImagesSize.tablet.height,
        },
        mobile: {
            original: projectsImages.travelsMobile,
            originalHR: projectsImages.travelsMobileHR,
            webp: projectsImages.travelsMobileWebp,
            webpHR: projectsImages.travelsMobileWebpHR,
            width: projectsImagesSize.mobile.width,
            height: projectsImagesSize.mobile.height,
        },
        alt: 'Скриншот проекта Путешествия.',
    },
    calculator: {
        desktop: {
            original: projectsImages.calculatorDesktop,
            originalHR: projectsImages.calculatorDesktopHR,
            webp: projectsImages.calculatorDesktopWebp,
            webpHR: projectsImages.calculatorDesktopWebpHR,
            width: projectsImagesSize.desktop.width,
            height: projectsImagesSize.desktop.height,
        },
        tablet: {
            original: projectsImages.calculatorTablet,
            originalHR: projectsImages.calculatorTabletHR,
            webp: projectsImages.calculatorTabletWebp,
            webpHR: projectsImages.calculatorTabletWebpHR,
            width: projectsImagesSize.tablet.width,
            height: projectsImagesSize.tablet.height,
        },
        mobile: {
            original: projectsImages.calculatorMobile,
            originalHR: projectsImages.calculatorMobileHR,
            webp: projectsImages.calculatorMobileWebp,
            webpHR: projectsImages.calculatorMobileWebpHR,
            width: projectsImagesSize.mobile.width,
            height: projectsImagesSize.mobile.height,
        },
        alt: 'Скриншот проекта Калькулятор.',
    },
    cards: {
        desktop: {
            original: projectsImages.cardsDesktop,
            originalHR: projectsImages.cardsDesktopHR,
            webp: projectsImages.cardsDesktopWebp,
            webpHR: projectsImages.cardsDesktopWebpHR,
            width: projectsImagesSize.desktop.width,
            height: projectsImagesSize.desktop.height,
        },
        tablet: {
            original: projectsImages.cardsTablet,
            originalHR: projectsImages.cardsTabletHR,
            webp: projectsImages.cardsTabletWebp,
            webpHR: projectsImages.cardsTabletWebpHR,
            width: projectsImagesSize.tablet.width,
            height: projectsImagesSize.tablet.height,
        },
        mobile: {
            original: projectsImages.cardsMobile,
            originalHR: projectsImages.cardsMobileHR,
            webp: projectsImages.cardsMobileWebp,
            webpHR: projectsImages.cardsMobileWebpHR,
            width: projectsImagesSize.mobile.width,
            height: projectsImagesSize.mobile.height,
        },
        alt: 'Скриншот проекта Карточки.',
    },
};

export default projectsImagesSet;
