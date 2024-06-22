import { IImageSet } from '../../../types/image';
import * as certImages from '.';

const certImagesSet: IImageSet = {
    certLayout: {
        desktop: {
            original: certImages.certLayoutDesktop,
            originalHR: certImages.certLayoutDesktopHR,
            webp: certImages.certLayoutDesktopWebp,
            webpHR: certImages.certLayoutDesktopWebpHR,
            width: 500,
            height: 702,
        },
        mobile: {
            original: certImages.certLayoutMobile,
            originalHR: certImages.certLayoutMobileHR,
            webp: certImages.certLayoutMobileWebp,
            webpHR: certImages.certLayoutMobileWebpHR,
            width: 280,
            height: 393,
        },
        alt: 'Сертификат по верстке.',
    },
    certAdaptLayout: {
        desktop: {
            original: certImages.certAdaptLayoutDesktop,
            originalHR: certImages.certAdaptLayoutDesktopHR,
            webp: certImages.certAdaptLayoutDesktopWebp,
            webpHR: certImages.certAdaptLayoutDesktopWebpHR,
            width: 500,
            height: 702,
        },
        mobile: {
            original: certImages.certAdaptLayoutMobile,
            originalHR: certImages.certAdaptLayoutMobileHR,
            webp: certImages.certAdaptLayoutMobileWebp,
            webpHR: certImages.certAdaptLayoutMobileWebpHR,
            width: 280,
            height: 393,
        },
        alt: 'Сертификат по адаптивной верстке.',
    },
    certJS: {
        desktop: {
            original: certImages.certJSDesktop,
            originalHR: certImages.certJSDesktopHR,
            webp: certImages.certJSDesktopWebp,
            webpHR: certImages.certJSDesktopWebpHR,
            width: 500,
            height: 702,
        },
        mobile: {
            original: certImages.certJSMobile,
            originalHR: certImages.certJSMobileHR,
            webp: certImages.certJSMobileWebp,
            webpHR: certImages.certJSMobileWebpHR,
            width: 280,
            height: 393,
        },
        alt: 'Сертификат по JavaScript.',
    },
};

export default certImagesSet;
