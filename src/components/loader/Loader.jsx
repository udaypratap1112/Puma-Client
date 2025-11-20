import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './loader.css'

 const Loader = ({height}) => {
  console.log(height);
   return (
    
    <motion.div key={'modal'} initial={{ background: '#000000' }}
    animate={{ background: '#FFFFFF' }}
   
         className={`loader d-flex w-100 justify-content-center align-items-center `} style={{ height: height ?? "70vh" }}><h1>PUMA</h1></motion.div>
     
  )
}

export default Loader;