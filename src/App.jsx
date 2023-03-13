import logo from './logo.svg';
import Topbar from './components/topbar/Topbar';
import Testimonials from './components/testimonials/Testimonials';
import Portfolio from './components/portfolio/Portfolio';
import Work from './components/work/Works';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import "./app.scss"
import { useEffect, useState } from 'react';
import Menu from './components/menu/Menu';


function App() {


  const [menuOpen , setMenuOpen ] = useState(false);
  return (
    <>
      <div className='app'  >
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
<div className="section">
         <Intro />
          <Portfolio />
          <Testimonials />
          <Work />
          <Contact />
</div>



    
</div>
    </>
  );
}

export default App;
