import styled from 'styled-components';
import colors from '../global/colors';
import Container from './Container';
import fonts from '../global/fonts';
import viewports from '../global/viewports';

const StyledFooter = styled.footer`
    padding: 40px 0;
    background-color: ${colors.mainBackground};
    font-family: ${fonts.mainFont};
    text-align: center;

    address,
    a,
    p {
        text-decoration: none;
        font-style: italic;
        font-size: 1rem;
        margin: 0;
        margin-bottom: 0.2rem;
        color: ${colors.mainFont};
    }

    a:hover {
        opacity: 0.7;
    }

    a:focus {
        border-radius: 5px;
        outline-offset: 2px;
        outline: 2px solid ${colors.mainFont};
    }

    a:active {
        opacity: 0.5;
    }

    @media ${viewports.mobile} {
        padding: 20px 0;
    }
`;

const Footer = () => (
    <StyledFooter>
        <Container>
            <div>
                <address>
                    Telegram:{' '}
                    <a href="https://t.me/SergeyMelkozerov">
                        @SergeyMelkozerov
                    </a>
                </address>
                <address>
                    Email:{' '}
                    <a href="mailto:lkn1st@gmail.com">lkn1st@gmail.com</a>
                </address>
                <p>© Мелкозеров С.В.</p>
            </div>
        </Container>
    </StyledFooter>
);

export default Footer;
