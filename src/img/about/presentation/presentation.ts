import { IImageSet } from "../../../types/image";
import * as presentationImages from ".";

export const presentationImagesSet: IImageSet = {
    pc: {
      desktop: {
        original: presentationImages.pcDesktop,
        originalHR: presentationImages.pcDesktopHR,
        webp: presentationImages.pcDesktopWebp,
        webpHR: presentationImages.pcDesktopWebpHR,
        width: 280,
        height: 280
      },
      alt: "Компьютер на столе."
    },
};