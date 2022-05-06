import {t} from "i18next";
import React from "react";
import styled from "styled-components";
import {motion, useMotionValue, useTransform} from "framer-motion";

const Container = styled.div`
  margin-top: 200px;
`;

const Policy: React.FC = () => {
  return (
    <Container>
      <motion.div
        initial={{opacity: 0, y: "1rem"}}
        transition={{duration: 0.5, delay: 0.5}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
      >
        {t<string>("policy.title")}
      </motion.div>
      <p>{t<string>("policy.content")}</p>
    </Container>
  );
};

export default Policy;
