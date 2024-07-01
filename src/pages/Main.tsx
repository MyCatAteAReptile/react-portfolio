import styled from 'styled-components';
import HeroSection from '../components/sections/hero/HeroSection';
import AboutSection from '../components/sections/about/AboutSection';
import ProjectsSection from '../components/sections/projects/ProjectsSection';
import ScrollToTopButton from '../components/UI/scroll/ScrollToTopButton';
import visuallyHidden from '../global/visuallyHidden';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainHeading = styled.h1`
    ${visuallyHidden};
`;

const Main = () => (
    <>
        <Header />
        <main>
            <MainHeading>Главная страница сайта-портфолио</MainHeading>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ScrollToTopButton />
        </main>
        <Footer />
    </>
);

export default Main;
