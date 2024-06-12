interface IImageVariants {
    original: string,
    originalHR: string,
    webp: string,
    webpHR: string,
    width: number,
    height: number
};

export interface IImage {
    desktop?: IImageVariants,
    tablet?: IImageVariants,
    mobile?: IImageVariants,
    alt: string
};

export interface IImageSet {
    [key: string]: IImage
};