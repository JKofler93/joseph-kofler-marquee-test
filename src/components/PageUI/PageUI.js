import Marquee from './Marquee'
import CallToAction from './CallToAction'
import {useState} from 'react';
import {motion} from 'framer-motion';


function PageUI({blocks}) {
  const [block, setBlock] = useState(blocks[0])
  return (
    <motion.div
      initial={{y: 1000}}
      animate={{y: 200}}
      transition={{delay: 0.5, duration: 1.0}}
    >
      <Marquee headline={block.headline} subhead={block.subhead}/>
      <CallToAction ctaMessage={block.cta}/>

      {/* {block.background} */}
    </motion.div>
  )
}

export default PageUI
