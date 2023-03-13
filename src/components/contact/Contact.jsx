import "./contact.scss";
import Footer from "../footer/Footer";

const Contact = () => {
  return (

  <>
    <div className="contact" id="contact">

<div className="left">
        <img src="https://images.pexels.com/photos/879143/pexels-photo-879143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
</div>
<div className="right">
  <form action="" className="contact_form">
    <h1>Contact Us </h1>
    <input type="text" name="name" id="" placeholder="Enter Your Name" />
    <textarea name="message" placeholder="Write Your message"></textarea>
    <button>Send</button>
  </form>
          <div className="sociallink">
            <a href="https://github.com/kawsar334" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100076935281732" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/kawsar-firoz-a140b9237/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="#"><i class="fa-brands fa-skype" target="_blank"></i></a>

          </div>
   
</div>

    </div>
    </>
  )
}

export default Contact