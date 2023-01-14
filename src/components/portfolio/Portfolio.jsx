import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList"
import "./porfiolio.scss"
import {
     featuredPortfolio,
     webPortfolio,
     designPortfolio,
     contentPortfolio,mobilePortfolio  } from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured") ;
  const [data, setData ]= useState([])
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(()=>{
    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break ;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
          case "design":
        setData(designPortfolio);
        break ;
      case "content":
        setData(contentPortfolio);
        break;
    default :
    setData(featuredPortfolio);
    }


  },[selected])
  return (
    <div className="portfilio" id="portfolio">

      <h1>Portfilio</h1>
      <ul>
        {list.map((item)=>(
          <PortfolioList  item={item} key={item.id}  active={selected === item.id }  setSelected={setSelected}/>
        ))}
      
      </ul>

      <div className="portfolio_container">
    { data.map((item=>(   <div className="item" key={item.id }>
          <img src={item.img} alt="Loaing..." />
          <h3>{item.title} </h3>
        </div>
    )))
        }
        
      
      
      
      </div>
    </div>
  )
}

export default Portfolio