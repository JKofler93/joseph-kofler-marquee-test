import {motion} from 'framer-motion';

function Marquee({headline, subhead}) {
  return (
    <motion.div>
      <h1>{headline}</h1>
      <h2>{subhead}</h2>
    </motion.div>
  )
}

export default Marquee
