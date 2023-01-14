import "./menu.scss"

const Menu = ({ menuOpen, setMenuOpen}) => {
  return (
    <div className={"menu " +(menuOpen && "active")}>

        <ul>
            <li><a href="#intro" onClick={()=>setMenuOpen(!menuOpen)}>Home</a></li>
              <li><a href="#portfolio"  onClick={()=>setMenuOpen(!menuOpen)}>portfolio</a></li>
              <li><a href="#work" onClick={()=>setMenuOpen(!menuOpen)}>work</a></li>

              <li><a href="#testimonials" onClick={()=>setMenuOpen(!menuOpen)}>testimonials</a></li>
              <li><a href="#contact" onClick={()=>setMenuOpen(!menuOpen)}>contact</a></li>
          </ul>
    </div>
  )
}

export default Menu