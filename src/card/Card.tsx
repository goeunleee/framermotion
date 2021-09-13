import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./image-data";
import './hoverstyles.css'
import './cardstyles.css'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BasicTextFields,{basicButton} from '../buttonTest'
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
 
    opacity: 1,
    
  },

  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  

};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const body ={
  
  hidden :{opacity:0,},
  show:{
   // position:absolute,
    opacity:1,
    trasition:{
      staggerChildren:0.2,
    }
  }
}

const child ={
  hidden:{
    opacity:0,
    x: -50,
  },
  show:{
    opacity:1,
    x:0,
    transition:{
      duration:0.8
    }
  }
}

function Content() {
  return (
    
    <motion.div
    
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
      <div className="row" />
      <div className="row" />
      <div className="row" />
      </motion.div>
     
  );
}



export const Example = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    if (isOpen === false){toggleOpen(); cardOpen(); }
  };
  
  const [isHover, toggleHover] = React.useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [endEdit, setendEdit] = useState(false);
  const toggleOpen = () =>{ setInfo(!info); console.log('isopen, info');};
  const cardOpen = () =>{setIsOpen(!isOpen); console.log('isopen')}
  const cardEdit = ()=>{
      setEdit(true);
      setendEdit(false)
      setInfo(false)
  }
  const editEnd=()=>{
    setendEdit(true)
    setEdit(false);
   
  } 
  

  

  return (
    <>
     <button onClick={cardEdit}>edit</button> 
     <button onClick={editEnd}>back</button> <br/><br/><br/>
     
    {/* <motion.div
    variants={body}
    style={{marginLeft:"300px",border:'2px, solid'}}
    initial="hidden"
    animate="show"
      >
        <AnimatePresence>
        <motion.div variants={child}   style={{marginLeft:"300px",border:'2px, solid', backgroundColor:"green", marginBottom:3}} initial="hidden" animate="show">1</motion.div>
        <motion.div variants={child}   style={{marginLeft:"300px",border:'2px, solid', backgroundColor:"green" ,marginBottom:3}} initial="hidden" animate="show">2</motion.div>
        <motion.div variants={child}   style={{marginLeft:"300px",border:'2px, solid', backgroundColor:"green" ,marginBottom:3}} initial="hidden" animate="show">3</motion.div>
        </AnimatePresence>
    </motion.div> */}


     <motion.div
         style={{marginLeft:100,borderCollapse:"separate"
         ,borderRadius:50,overflow:"hidden",perspective: 1}}
         animate={(endEdit===false&&isEdit===true)?{ backgroundColor:"white",width:1550,height:600,
         position:"absolute",x:70,}: {opacity:"none"}}
         transition={{duration:0.5}}>

           <motion.div
           animate={(endEdit===false&&isEdit===true)?{opacity:1,x:380,y:50,float:"left",width:1}:{opacity:0,position:"absolute"}}>
             <BasicTextFields />
             </motion.div>
            
             <motion.div 
              animate={(endEdit===false&&isEdit===true)?{opacity:1,x:650,y:60,float:"left",width:1}:{opacity:0,position:"absolute"}}
              whileHover={{
                  scale: 1.1,
                  transition: {
                  duration: 0.3,
                  // how many times we want to repeat the animation
                  yoyo: Infinity
                  }
              }}
            > <Button variant="outlined" color="primary" style={{width:90,height:55}}>Button</Button></motion.div>
            <motion.div
           animate={(endEdit===false&&isEdit===true)?{opacity:1,x:380,y:130,float:"left",width:1}:{opacity:0,position:"absolute"}}>
             <BasicTextFields /> 
             </motion.div>
             <motion.div animate={(endEdit===false&&isEdit===true)?{float:"left",
              x:660,y:145,perspective: 1,opacity:1,position:"absolute"}:{opacity:0,position:"absolute"}}><AddCircleIcon fontSize="large" style={{color:"lightgray"}}/></motion.div>
             
           <motion.div style={{width:1200 , height:2, backgroundColor:"lightgray", float: "left"}}
           animate={(endEdit===false&&isEdit===true)?{opacity:1,float: "left", x:50, y:250,position:"absolute"}:{opacity:0,position:"absolute"}}
           transition={{duration:0.5}}/>

           <motion.div style={{width:2 , height: 550, backgroundColor:"lightgray", float: "left"}}
           animate={(endEdit===false&&isEdit===true)?{opacity:1,float: "left", x:860, y:30}:{opacity:0,position:"absolute"}}
           transition={{duration:0.5}}/>
           <motion.div style={{backgroundColor:"#65b473",borderRadius:100, position:'absolute',height:50,width:50, x:400,y:500,textAlign:"center",}} transition={{}}>
             <p style={{marginTop:-5,fontSize:40,color:'whitesmoke',position:"absolute",marginLeft:10}}
            >+</p>
             </motion.div>
          <motion.img  animate={(endEdit===false&&isEdit===true)?{opacity:1,width:700,x:860,y:80, borderRadius:30,float: "left"}:{opacity:0}} 
          src="https://help.cricut.com/hc/article_attachments/360017023734/mceclip0.png"
          transition={{duration:0.5}}/>
        </motion.div>
    
    <div className="cardbody">
     
      
      

      <AnimatePresence initial={false} custom={direction}>
      <motion.div animate={(isEdit===true)? {opacity:0, pointerEvents:"none"}: {opacity:1}}>
      <div  className="next" onClick={() => paginate(-1) }>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      </motion.div>



      <motion.div
            className="menu-item"
            onTapStart={toggleHoverMenu}
            onTapCancel={toggleHoverMenu}
            animate={{ x: 50, y: 50, scale: 1 }}
          > 
     
        <motion.img
          onClick={toggleOpen}
          key={page}
          style={{marginLeft:"-35px",marginTop:0,}}
          src={images[imageIndex].src}
          custom={direction}
          variants={variants}
          initial="enter"
          animate={(isEdit===true)? {pointerEvents:"none", x:-510,y:-240, opacity:1} :(isEdit===false)? {x:0,y:0, opacity:1} :"center"}
          exit="exit"
          transition={isEdit? {duration:0.5} :{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }, 
          }}
          drag="x"
          width="400px"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />  
       
  
        
       
        
        
      <AnimatePresence>
   
      <motion.ul
      style={{position:"absolute", width:300, marginTop:300, marginLeft:-0}}
      layout
      initial={{ opacity: 0 }}
      animate={info ? { opacity: 1 } :isEdit? {opacity:0, pointerEvents:"none"}: {opacity:0}}
      exit={{ opacity: 0 }}
    >
      <motion.li onClick={cardOpen}
      
      >
  
      <i className="fas fa-credit-card"></i>
      <FontAwesomeIcon icon={faCreditCard} />
      <h4>{images[imageIndex].name}</h4>
     {(!isOpen && !isEdit)&& <Content />} 
     </motion.li>
     
     </motion.ul>
     </AnimatePresence>
       </motion.div>   
         </AnimatePresence>
  

     
    </div>
    </>
  );
};
