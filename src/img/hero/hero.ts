import { IImageSet } from '../../types/image';
import * as heroImages from '.';

const heroImagesSet: IImageSet = {
    cat: {
        desktop: {
            original: heroImages.catDesktop,
            originalHR: heroImages.catDesktopHR,
            webp: heroImages.catDesktopWebp,
            webpHR: heroImages.catDesktopWebpHR,
            width: 250,
            height: 250,
        },
        mobile: {
            original: heroImages.catMobile,
            originalHR: heroImages.catMobileHR,
            webp: heroImages.catMobileWebp,
            webpHR: heroImages.catMobileWebpHR,
            width: 320,
            height: 320,
        },
        alt: 'Кот за компьютерным столом.',
    },
};

export default heroImagesSet;
