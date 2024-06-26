import styled from 'styled-components';
import Slider from '../../UI/slider/Slider';
import fonts from '../../../global/fonts';
import viewports from '../../../global/viewports';
import certificatesSlides from '../../../data/certificatesSlides';

const StyledCertificates = styled.div`
    margin: 0 auto;
    padding: 40px 0;
    font-family: ${fonts.mainFont};

    & h3 {
        font-size: 1.5rem;
        font-weight: 900;
        text-align: center;
        margin: 0;
        margin-bottom: 2.5rem;
    }

    @media ${viewports.mobile} {
        padding: 20px 0;
    }
`;

const Certificates = () => (
    <StyledCertificates>
        <h3>Мои сертификаты</h3>
        <Slider slides={certificatesSlides} />
    </StyledCertificates>
);

export default Certificates;
