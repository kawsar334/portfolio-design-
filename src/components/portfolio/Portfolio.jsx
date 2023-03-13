import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PortfolioList from "../portfolioList/PortfolioList"
import "./porfiolio.scss";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import {
     frontend,
     fullstack,
     designPortfolio,
     contentPortfolio,mobilePortfolio  } from "../../data";
import { ButtonBase } from "@mui/material";

const Portfolio = () => {
  const [selected, setSelected] = useState("frontend") ;
  const [open , setOpen ]=useState(false)
  const [data, setData ]= useState([]);
  const [currentPage, setCurrentPage] =useState(1);
  const [postPerPage, setPostPerPage] =useState(10);
  const [desc, setDesc]= useState("")
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
    // {
    //   id: "design",
    //   title: "Design",
    // },
    // {
    //   id: "content",
    //   title: "Content",
    // },
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


  },[selected]);
  // 
  useEffect(() => {
    AOS.init()
  }, [])


  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex= lastPostIndex -postPerPage ;
  const currentPost= data.slice(firstPostIndex, lastPostIndex);
  let pages = [];
  const handleDetails = (details)=>{
      setOpen(!open);
      setDesc(details)
  }
  
  return (
    <div className="portfilio" id="portfolio"  >

          {open &&<div className="details">
            <div className="detailsWrapper">
          <span className="close" onClick={()=>setOpen(!open)}><i class="fa-solid fa-xmark"></i></span>
          
          {desc?.img2 && <img src={desc?.img2} alt="" />}
          <h3>{desc.title}</h3>
         {desc?.desc && <p>{desc.desc}</p>}
          <div>

          <a href={desc.demo ||"#"}  target="_blank">Demo</a>
            <a href={desc.github || "#"}  target="_blank">Gihub</a>

          </div>

            </div>
          </div>}

      <h1  >My Projects</h1>
      <ul>
        {list.map((item)=>(
          <PortfolioList  item={item} key={item.id}  active={selected === item.id }  setSelected={setSelected}/>
        ))}
      </ul>
      <div className="portfolio_container" >
    { currentPost.map((item=>( 
      <div href={item?.demo} target="_blank" className="item" key={item.id} >
        <img src={item.img} alt="Loaing..." />
        <div className="pdesc">
          <p ><a href={item?.demo || "#"}  >{item.title}</a>  </p>
        <div>

          <a href={item?.demo || "#"} ><i class="fa-solid fa-desktop"></i> <span>Demo</span></a>
          <a href={item?.github || "#"} ><i class="fa-brands fa-github"></i> <span>Github</span></a>
        </div>
          <button className="detailsBtn" onClick={() => handleDetails(item)}><i class="fa-solid fa-circle-info"></i> See Details</button>

        </div>
        </div>
    )))
        }
      </div>
    </div>
  )
}

export default Portfolio