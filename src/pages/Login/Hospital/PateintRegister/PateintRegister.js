import { motion } from 'framer-motion'
import React from 'react'
import styles from "./PateintRegister.module.css"

function PateintRegister() {
  return (
    <motion.div
    initial = {{opacity:0}}
    animate = {{opacity:1}}
    exit = {{opacity:1}}
    >PateintRegister</motion.div>
  )
}

export default PateintRegister