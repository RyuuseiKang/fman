import React from 'react';
import { t } from 'i18next';
import styled from 'styled-components';

import Aru from '../assets/aru.png';
import Machan from '../assets/machan.png';

const Container = styled.div`
    flex: 1;
    width: 100wh;
    height: 100vh;
    background-color: #FBFBFB;

    flex-direction: row;
`;

const MainContent: React.FC = () => {
    return (
        <Container>
            <span>{t<string>('main.title')}</span>
            <img src={Aru} alt='aru' style={{height: '100vh'}} />
        </Container>
    );
}

export default MainContent;