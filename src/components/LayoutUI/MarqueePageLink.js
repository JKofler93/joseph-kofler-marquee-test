
import {NavLink} from 'react-router-dom';

function MarqueePageLink({page}) {
  return (
    <li>
      <NavLink to={`/${page.title}`}>
        {page.title}
      </NavLink>
    </li>
  )
}

export default MarqueePageLink
