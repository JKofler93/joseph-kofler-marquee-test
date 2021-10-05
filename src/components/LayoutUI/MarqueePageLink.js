
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

function MarqueePageLink({title, slug}) {
  

  return (
    <motion.li
      whileHover={{ scale: 1.1, color: '#f8e112'}}
      transition={{ type: 'spring', stiffness: 500}}
    >
      <Link to={`/${slug}`}>
        {title}
      </Link>
    </motion.li>
  )
}

export default MarqueePageLink
