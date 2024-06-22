import { IImage } from '../../../types/image';
import viewports from '../../../global/viewports';

interface CustomPictureProps {
    image: IImage;
}

const CustomPicture = ({ image }: CustomPictureProps) => (
    <picture>
        {image.mobile?.webp && image.mobile?.webpHR && (
            <source
                type="image/webp"
                media={viewports.mobile}
                srcSet={`${image.mobile?.webp} 1x, ${image.mobile?.webpHR} 2x`}
                width={image.mobile?.width}
                height={image.mobile?.height}
            />
        )}

        {image.tablet?.webp && image.tablet?.webpHR && (
            <source
                type="image/webp"
                media={viewports.tablet}
                srcSet={`${image.tablet?.webp} 1x, ${image.tablet?.webpHR} 2x`}
                width={image.tablet?.width}
                height={image.tablet?.height}
            />
        )}

        {image.desktop?.webp && image.desktop?.webpHR && (
            <source
                type="image/webp"
                srcSet={`${image.desktop?.webp} 1x, ${image.desktop?.webpHR} 2x`}
                width={image.desktop?.width}
                height={image.desktop?.height}
            />
        )}

        {image.mobile?.original && image.mobile?.originalHR && (
            <source
                media={viewports.mobile}
                srcSet={`${image.mobile?.original} 1x, ${image.mobile?.originalHR} 2x`}
                width={image.mobile?.width}
                height={image.mobile?.height}
            />
        )}

        {image.tablet?.original && image.tablet?.originalHR && (
            <source
                media={viewports.tablet}
                srcSet={`${image.tablet?.original} 1x, ${image.tablet?.originalHR} 2x`}
                width={image.tablet?.width}
                height={image.tablet?.height}
            />
        )}

        {(() => {
            if (image.desktop?.original && image.desktop?.originalHR) {
                return (
                    <img
                        src={image.desktop.original}
                        srcSet={`${image.desktop.originalHR} 2x`}
                        width={image.desktop.width}
                        height={image.desktop.height}
                        alt={image.alt}
                    />
                );
            }

            if (image.tablet?.original && image.tablet?.originalHR) {
                return (
                    <img
                        src={image.tablet.original}
                        srcSet={`${image.tablet.originalHR} 2x`}
                        width={image.tablet.width}
                        height={image.tablet.height}
                        alt={image.alt}
                    />
                );
            }

            if (image.mobile?.original && image.mobile?.originalHR) {
                return (
                    <img
                        src={image.mobile.original}
                        srcSet={`${image.mobile.originalHR} 2x`}
                        width={image.mobile.width}
                        height={image.mobile.height}
                        alt={image.alt}
                    />
                );
            }

            return null;
        })()}
    </picture>
);

export default CustomPicture;
