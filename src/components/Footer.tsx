import { t } from 'i18next';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #B3A4C6;
`;

const Copyright = styled.p`
    font-size: 0.8rem;
    color: #fff;
`;

const Footer: React.FC = () => {
    return (
        <Container>
            <Copyright>
                {t<string>('footer.copyright')}
            </Copyright>
        </Container>
    );
};

export default Footer;