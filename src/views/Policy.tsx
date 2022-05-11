import { t } from "i18next";
import React from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Container = styled.div`
  padding: 0px 20px;
  justify-content: center;
  display: flex;
`;

const Content = styled.div`
  max-width: 880px;
  width: 100%;
`;

const PolicyTitleContainer = styled.div`
  padding: 1rem 0px;
`;

const PolicyTitle = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  
  background-color: #333;
  padding: 0px 5px;
  color: #FFF;
`;

const PolicySubTitle = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
`;

const PolicyContent = styled.span`
  font-family: 'Pretendard';
`;

const Policy: React.FC = () => {
  return (
    <Container>
      <Content>
        <PolicyTitleContainer
        >
          <PolicyTitle>{t<string>("policy.title")}</PolicyTitle>
        </PolicyTitleContainer>
        <motion.div
          initial={{ opacity: 0, y: "1rem" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ padding: '0.5rem 0px 0.5rem 0px' }}
        >
          <PolicySubTitle>{t<string>("policy.subtitle")}</PolicySubTitle>
        </motion.div>
        <PolicyContent>{t<string>("policy.content")}</PolicyContent>

      </Content>
    </Container>
  );
};

export default Policy;
