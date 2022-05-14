import React from "react";
import styled from "styled-components";

import {motion} from "framer-motion";

import Policy from "./Policy";
import VoiceBank from "./VoiceBank";

import MainContent from "../components/MainContent";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Aru from "../assets/character/aru/descriptions.js";
import Marin from "../assets/character/machan/descriptions.js";

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
          <VoiceBank characterDescription={Marin}/>
          <VoiceBank characterDescription={Aru}/>
        <Footer />
      </Container>
    </motion.div>
  );
};

export default Main;
