import { IImage } from './image';

export interface IProject {
    id: number;
    title: string;
    tag: string[];
    image: IImage;
    link: string;
    githubLink: string;
}
