import React,{useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Frame, useMotionValue, useTransform, useAnimation } from "framer";
import { motion,useDragControls } from "framer-motion";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Wrapper = styled.div`
 display: block-inline;
 z-index : 1;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    icon:{
       
        color:"#ed134d",
      
    },
  }),
);

export function Hoverdropdown (){
  const [isHover, toggleHover] = React.useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }
  const item = {
    hidden: { opacity: 0, x:50 },
    show: { opacity: 1 ,x:0, 
    transition:{
      duration:0.8,
    }}
  }
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
              <motion.div
     variants={container}
     initial="hidden"
     animate="show"
    >
       <motion.div variants={item}>11</motion.div>
       <motion.div variants={item}>22</motion.div>
       <motion.div variants={item}>33</motion.div>
    </motion.div>

              </div>
            </motion.div>
          </motion.div>
}


export default function BasicTextFields() {
  const classes = useStyles();
  const [textvalue, setTextvalue] = useState('Text');
  
  const [isHover, toggleHover] = React.useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setTextvalue(e.target.value);
    };
  

    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.5
        }
      }
    }
    const item = {
      hidden: { opacity: 0, x:50 },
      show: { opacity: 1 ,x:0, 
      transition:{
        duration:0.8,
      }}
    }
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
    <Wrapper>

{/* 
    <motion.div
     variants={container}
     initial="hidden"
     animate={isHover ? "enter" : "exit"}
    >
       <motion.div  animate={isHover ? "enter" : "exit"} variants={item}>1</motion.div>
       <motion.div   animate={isHover ? "enter" : "exit"} variants={item}>2</motion.div>
       <motion.div variants={item}>3</motion.div>
    </motion.div> */}

    <form className={classes.root} noValidate autoComplete="off"
      style={{display:"inline-block",width:"100%"}}>
      <TextField id="outlined-basic" label="cardName" variant="outlined"
        onChange={onChange}
        value={textvalue}
        InputProps={textvalue === ""? {
            endAdornment: (
              <InputAdornment position="start">
                <motion.div
                  animate={{
                    translateX: 15,
                    transition: {
                      times: [0.3, 0.2, 0.2],
                      yoyo: 3
                    }
                  }}>
                  <ReportProblemIcon className={classes.icon}/>
                </motion.div>
              </InputAdornment>
            ),
          } : {} }
      />
    
    </form>
    <br/> <br/>
    
    </Wrapper>
  );
}

export function BasicDrag(){

  const dragControls = useDragControls()

  return(
    <div style={{width:100,height:150,backgroundColor:"white",borderRadius:10,alignItems:"center"}}>
    <motion.div drag="y" dragConstraints={{top:100,bottom:100}} dragControls={dragControls} dragElastic >content1</motion.div>
    <motion.div drag="y" dragConstraints={{top:100,bottom:100}} dragControls={dragControls} dragElastic={1} >content2</motion.div>
    <motion.div drag="y" dragConstraints={{top:100,bottom:100}} dragControls={dragControls} dragElastic={1} >content3</motion.div>
    </div>
  )
}

export function basicButton (){
  return (
    <>
    <motion.div
    whileHover={{
        scale: 1.1,
        transition: {
        duration: 0.3,
        // how many times we want to repeat the animation
        yoyo: Infinity
        }
    }}
   >
  <Button variant="outlined" color="primary" style={{width:100,height:55}}>
    Button
  </Button>
  </motion.div> </>
  )
}
