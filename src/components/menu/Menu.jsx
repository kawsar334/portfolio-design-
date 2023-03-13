import "./menu.scss"

const Menu = ({ menuOpen, setMenuOpen}) => {
  return (
    <div className={"menu " +(menuOpen && "active")}>

        <ul>
            <li><a href="#intro" onClick={()=>setMenuOpen(!menuOpen)}>Home</a></li>
              <li><a href="#testimonials" onClick={()=>setMenuOpen(!menuOpen)}>About Me</a></li>
              <li><a href="#portfolio"  onClick={()=>setMenuOpen(!menuOpen)}>Projects</a></li>
              <li><a href="#work" onClick={()=>setMenuOpen(!menuOpen)}>Services</a></li>

              <li><a href="#contact" onClick={()=>setMenuOpen(!menuOpen)}>Contact</a></li>
        <li><a href="#" onClick={() => setMenuOpen(!menuOpen)}>Blog</a></li>

          </ul>
    </div>
  )
}

export default Menu