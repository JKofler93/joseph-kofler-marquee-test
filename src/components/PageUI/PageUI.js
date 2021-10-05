import Marquee from './Marquee'
import CallToAction from './CallToAction'
import {useState} from 'react';

function PageUI({blocks}) {
  const [block, setBlock] = useState(blocks[0])
  return (
    <div>
      <Marquee headline={block.headline} subhead={block.subhead}/>
      <CallToAction ctaMessage={block.cta}/>

      {/* {block.background} */}
    </div>
  )
}

export default PageUI
