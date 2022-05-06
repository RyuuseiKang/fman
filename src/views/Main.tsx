import React from "react";
import styled from "styled-components";

import MainContent from "../components/MainContent";
import Policy from "../components/Policy";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {motion} from "framer-motion";

const Container = styled.div`
  background-color: #fefefe;
`;

const Main: React.FC = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.3}}
      viewport={{once: true}}
    >
      <Container>
        <Header />

        <div id="">
          <MainContent />
        </div>
        <div id="policy">
          <Policy />
        </div>

        <div id="voicebank"></div>

        <Footer />
      </Container>
    </motion.div>
  );
};

export default Main;
