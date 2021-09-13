import React from "react";
import { Frame, useMotionValue, useTransform, useAnimation } from "framer";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
 display: flex;
 z-index : 1;
`;

export default function Emoji(){
    // const scaleLeft = useMotionValue(1);
  const motionValue = useMotionValue(0);
  return (
    <Wrapper>
      <motion.div
        style={{ translateX: motionValue }}
        animate={{
          scale: [1, 0.5, 2],
          translateX: 93,
          transition: {
            times: [0, 0.5, 1],
            yoyo: Infinity
          }
        }}
      >
        👊
      </motion.div>
      <motion.div style={{ translateX: motionValue }}>😝</motion.div>
      <motion.div style={{ scaleX: -1, translateX: motionValue }}>
        👊
      </motion.div>
    </Wrapper>
  );
}