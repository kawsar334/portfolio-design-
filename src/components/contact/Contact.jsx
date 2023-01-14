import "./contact.scss"

const Contact = () => {
  return (
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
</div>

    </div>
  )
}

export default Contact