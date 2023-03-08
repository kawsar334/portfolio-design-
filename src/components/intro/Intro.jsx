import './intro.scss'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import { useEffect, useRef } from 'react';
import Typical from 'react-typical'
const Intro = () => {
  


  

  return (
    <div className='intro' id='intro'>

      <div className="intro_left">
        <div className="imgContainer">

        <img src="/mee.png" alt="" />
        </div>
       

</div>
      <div className="intro_right">
        <div className="intro_wrapper">
          <h2>Hi There , I'm</h2>
          <h1>Kawsar firoz</h1>
          <h3>  
            <span >
              <Typical
                steps={['', 2000, 'Fullstack web Developer', 500]}
                loop={Infinity}
                // wrapper="p"                
              />
             
            </span>
          </h3>
        </div>
        <a href="#portfolio" >
          <ExpandMoreOutlinedIcon className='arrowDown' />
        </a>
        
      </div>

    </div>
  )
}

export default Intro