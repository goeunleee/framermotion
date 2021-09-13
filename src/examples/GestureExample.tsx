import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useState } from 'react';
const Container = styled(motion.div)`
    background: white;
    border-radius: 30px;
    width: 150px;
    height: 150px;
`;

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #4b7dc9 0%, rgb(230, 240, 255) 100%);
    overflow: hidden;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const GestureExample = () => {
    const [isHover, toggleHover] = useState(false);
    const toggleHoverMenu = () => {
        toggleHover(!isHover);
      };

    const subMenuAnimate = {
    enter: {
        opacity: 1,
        rotateX: 0,
        transition: {
        duration: 0.5
        },
        display: "block"
    },
    exit: {
        opacity: 0,
        rotateX: -15,
        transition: {
        duration: 0.5,
        delay: 0.3
        },
        transitionEnd: {
        display: "none"
        }
    }
    };

    return (
        <Body>
            <Container
              animate={{borderRadius: "100%", backgroundColor:"#114589", color:'white',
               scale:0.5}}
               onTapStart={toggleHoverMenu}
               whileTap={{rotate:180}}
               onTapCancel={toggleHoverMenu}
              whileHover={{
                scale: 0.6,
                transition: { duration: 0.5 },
                borderRadius: "100%",
                
              }}
              
            ><p style={{justifyItems:"center", textAlign:"center",justifyContent:"center",fontSize:"100px",marginTop:"-1px"}}>+</p>
               <motion.div
              className="sub-menu"
              initial="exit"
              animate={isHover ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
              <div className="sub-menu-background" />
              <div className="sub-menu-container">
                <div className="sub-menu-item">item 1</div>
              </div>
              <div className="sub-menu-background" />
              <div className="sub-menu-container">
                <Container  animate={{ x: -20, y: 90, scale: 0.5,borderRadius:'100%' }}/>
              </div>
            </motion.div>
            </Container>

<div className="container">
        <div className="flex-item">
          <h1>onHover</h1>
          <motion.div
            className="menu-item"
            onHoverStart={toggleHoverMenu}
            onHoverEnd={toggleHoverMenu}
          >
            <a href="/">Menu Item</a>
            <motion.div
              className="sub-menu"
              initial="exit"
              animate={isHover ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
              <div className="sub-menu-background" />
              <div className="sub-menu-container">
                <div className="sub-menu-item">Submenu Item 1</div>
                <div className="sub-menu-item">Submenu Item 2</div>
                <div className="sub-menu-item">Submenu Item 3</div>
                <div className="sub-menu-item">Submenu Item 4</div>
                <div className="sub-menu-item">Submenu Item 5</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
</div>       
        </Body>
    )
}