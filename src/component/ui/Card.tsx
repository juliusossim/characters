import { motion } from "framer-motion"
import { ReactNode } from "react"

type CardProps = {children: ReactNode}

export const Card = ({ children }: CardProps) => {
  return (
    <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
  >
    {children}
  </motion.div>
  )
}