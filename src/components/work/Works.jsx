import "./work.scss"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useState } from "react";

const Work = () => {
  const [currentSlide, setCurrntSlide] = useState(1) ;

  // API HERE 
  const data = [
    {
      id: "1",
      icon: "https://as1.ftcdn.net/v2/jpg/04/99/62/44/1000_F_499624431_rGO9fOhjcqkVAEsp0bDaqiub28WGhlhE.jpg",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "https://as1.ftcdn.net/v2/jpg/04/99/62/44/1000_F_499624431_rGO9fOhjcqkVAEsp0bDaqiub28WGhlhE.jpg",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "https://as1.ftcdn.net/v2/jpg/04/99/62/44/1000_F_499624431_rGO9fOhjcqkVAEsp0bDaqiub28WGhlhE.jpg",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];


  // handleClick
  const handleClick = (way)=>{

  way === "left" ? setCurrntSlide(currentSlide>0 ? currentSlide -1 :2):setCurrntSlide(currentSlide<data.length-1 ?currentSlide +1 :0 )
   
  }

  return (
    <div className="work" id="work">

<div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
{ data.map((item)=>( <div className="slider_container" key={item.id}>
    <div className="item">
      <div className="left">
        <div className="left_container">
          <div className="img_container">
                  <img src={item.icon} alt="loading..." />
          </div>
          <h2>{item.title}</h2>
          <p>{item.desc} .</p>
          <span>projects</span>
        </div>
      </div>
      <div className="right">
              <img src={item.img} alt="" />
      </div>
    </div>
  </div>
)) 
}
</div>
     <ArrowBackIosNewOutlinedIcon className="arrow arrow_left"  onClick={()=>handleClick("left")}/>
      <ArrowForwardIosOutlinedIcon className="arrow arrow_right" onClick={() => handleClick("right")}  />

    </div>
  )
}

export default Work