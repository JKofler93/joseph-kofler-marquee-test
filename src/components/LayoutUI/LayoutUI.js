import MarqueePageLink from './MarqueePageLink';
import logo from '../../media/abc_logo.svg';

function LayoutUI({pages}) {
  return (
    <div>
      <nav>
        <img src={logo} alt='abc-logo'/>
        <ul>
        {pages && pages.map((page) => <MarqueePageLink key={page.slug} page={page} title={page.title} slug={page.slug}/> )}
        </ul>
      </nav>
      <button onClick={() => console.log("Hello from the Contact Us button")}>Contact Us</button>
    </div>
  )
}

export default LayoutUI
