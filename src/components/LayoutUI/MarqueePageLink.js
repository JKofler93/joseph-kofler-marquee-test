
import {NavLink} from 'react-router-dom';

function MarqueePageLink({title, slug}) {
  

  return (
    <li>
      <NavLink to={`/${slug}`}>
        {title}
      </NavLink>
    </li>
  )
}

export default MarqueePageLink
