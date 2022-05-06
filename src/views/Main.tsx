import React from 'react';
import styled from "styled-components";

import MainContent from '../components/MainContent';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.div`
    background-color: #FEFEFE;
`;

const Main: React.FC = () => {
    return (
        <Container>
            <Header />
            <MainContent />
            <Footer />
        </Container>
    );
}

export default Main;