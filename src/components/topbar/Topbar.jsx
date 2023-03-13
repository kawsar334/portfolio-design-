import "./topbar.scss"

import PersonIcon from '@mui/icons-material/Person';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const Topbar = ({ menuOpen, setMenuOpen}) => {
  return (
    <div className={" topbar "+(menuOpen && "active") }>
        <div className="wrapper">
            <div className="left">
          <a href="#portfolio" className="logo"> 
          Kawsar.</a>
          <div className="item_container">
            <PersonIcon /><span> +966509325731</span>

          </div>
          <div className="item_container">
            <MailOutlineOutlinedIcon />
            <span>kawsarfiroz11@gmail.com</span>
          </div>
            </div>
        <div className="right" onClick={() => setMenuOpen(!menuOpen)}>

              <div className="hamburger">
                <span  className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
               

              </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar