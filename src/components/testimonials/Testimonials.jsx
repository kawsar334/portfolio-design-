import "./testimonial.scss"

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <div className="twrapper">

      <h1 className="theader">About Me</h1>
      <p className="desc">
          I am a MERN-Stack WEB Developer. I am working with React, Node.js and MongoDB. I also have experience in developing <b>Static</b> & <b>Dynamic</b> websites using HTML5, CSS3 and JavaScript (ES6). I am a quick learner. I believe in hard work and efficiency.  I always focus on learning new technology. My goal is to become A World-Class Professional Web Developer.Here are a few technologies I've been working with recently 
      </p>
        <hr />

      <div className="items">
          <div className="titem">
            <h3 className="Titemheader">Front-end</h3>
            <p className="titemdesc"> HTML5, css3, Sass, JavaScript(ES6) , React.js, Bootstrap, React-router-dom , context api,</p>
          </div>
          <div className="titem">
            <h3 className="Titemheader">Back-end</h3>
            <p className="titemdesc"> Node.js, Express.js, Mongo DB, jwt, bcrypt, </p>
          </div>
          <div className="titem">
            <h3 className="Titemheader">Tools</h3>
            <p className="titemdesc">Vs Code, git , Npm & Yearn , Netlify, </p>
          </div>
      </div>
     
      <hr />
      </div>
    </div>
  )
}

export default Testimonials