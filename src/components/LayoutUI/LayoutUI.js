import MarqueePageLink from './MarqueePageLink';
import './layout.css';
import logo from '../../media/abc_logo.svg';
import {motion} from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
    transition: {
      yoyo: Infinity
    }
  }
}

function LayoutUI({pages}) {
  return (
    <motion.div
      initial={{y: -200}}
      animate={{y: 0}}
      transition={{delay: 0.5, duration: 1.0}}
      className='layout-ui'
    >
      <nav className='layout-ui-nav'>
        <img src={logo} alt='abc-logo'/>
        <ul className='layout-ui-ul'>
        {pages && pages.map((page) => <MarqueePageLink key={page.slug} page={page} title={page.title} slug={page.slug}/> )}
        </ul>
      </nav>
      <motion.button 
        variants={buttonVariants}
        animate='visible'
        whileHover='hover'
        onClick={() => console.log("Hello from the Contact Us button")}
        className='layout-ui-contact-button'
      >Contact Us</motion.button>
    </motion.div>
  )
}

export default LayoutUI
