import { motion } from "framer-motion";
import React from "react";

type TextAnimationProps = {
    children: React.ReactNode;
}

const TextAnimation: React.FC<TextAnimationProps> = ({children}) => {
    return (
        <motion.div
              initial={{ opacity: 0, x: "3rem" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
                {children}
            </motion.div>
    );
}

export default TextAnimation;