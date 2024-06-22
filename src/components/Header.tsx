import styled from 'styled-components';
import Navbar from './UI/navbar/Navbar';
import colors from '../global/colors';
import Container from './Container';
import Logo from './Logo';
import viewports from '../global/viewports';

const StyledHeader = styled.header`
    padding: 40px 0;
    background-color: ${colors.mainBackground};

    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media ${viewports.mobile} {
        padding: 30px 0 20px;
    }
`;

const Header = () => (
    <StyledHeader>
        <Container>
            <div>
                <Logo />
                <Navbar />
            </div>
        </Container>
    </StyledHeader>
);

export default Header;
