import { useEffect, useState } from "react";

import PortfolioList from "../portfolioList/PortfolioList"
import "./porfiolio.scss"
import {
     frontend,
     fullstack,
     designPortfolio,
     contentPortfolio,mobilePortfolio  } from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("frontend") ;
  const [data, setData ]= useState([])
  const list = [
    {
      id: "frontend",
      title: "frontend",
    },
    {
      id: "fullstack",
      title: "fullstack",
    },
    {
      id: "mobile",
      title: "React Native",
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
      case "frontend":
        setData(frontend);
        break ;
      case "fullstack":
        setData(fullstack);
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
    setData(frontend);
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
    { data.map((item=>( 
        <a href={item?.demo} className="item" key={item.id }>
          <img src={item.img} alt="Loaing..." />
          <h3>{item.title} </h3>
      <h3>{item.title} </h3>

        </a>
    )))
        }
        
      
      
      
      </div>
    </div>
  )
}

export default Portfolio