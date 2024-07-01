import projectsImagesSet from '../img/projects/projects';
import { IProject } from '../types/project';
import tags from './tags';

const projects: IProject[] = [
    {
        id: 1,
        title: 'Портфолио',
        tag: [tags.all, tags.react],
        image: projectsImagesSet.portfolio,
        link: 'https://melkozerov-sv.vercel.app',
        githubLink:
            'https://github.com/MyCatAteAReptile/react-portfolio/tree/master',
    },
    {
        id: 2,
        title: 'Карточки',
        tag: [tags.all, tags.react],
        image: projectsImagesSet.cards,
        link: 'https://cards-pi-steel.vercel.app',
        githubLink:
            'https://github.com/MyCatAteAReptile/practice-react-cards/tree/master',
    },
    {
        id: 3,
        title: 'Калькулятор',
        tag: [tags.all, tags.react],
        image: projectsImagesSet.calculator,
        link: 'https://practice-react-calculator.vercel.app',
        githubLink:
            'https://github.com/MyCatAteAReptile/practice-react-calculator/tree/master',
    },
    {
        id: 4,
        title: 'To-do список',
        tag: [tags.all, tags.react],
        image: projectsImagesSet.todo,
        link: 'https://to-do-to-do-todos.vercel.app',
        githubLink:
            'https://github.com/MyCatAteAReptile/practice-react-form/tree/main',
    },
    {
        id: 5,
        title: 'Фитнес',
        tag: [tags.all, tags['html-css']],
        image: projectsImagesSet.fitness,
        link: 'https://fitness-2-0-v747.vercel.app',
        githubLink: 'https://github.com/MyCatAteAReptile/fitness-2.0/tree/main',
    },
    {
        id: 6,
        title: 'Путешествия',
        tag: [tags.all, tags['html-css']],
        image: projectsImagesSet.travels,
        link: 'https://travels-rho.vercel.app',
        githubLink: 'https://github.com/MyCatAteAReptile/Travels/tree/main',
    },
];

export default projects;
