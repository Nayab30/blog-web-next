import Navbar from "@/component/Header"
import Footer from "@/component/Footer";
const contact = () =>{
    return(
        <div>
<Navbar/>

<div className="contact">
    <h1>CONTACT US</h1>
</div>
<div className="contact-detail">
    <p>First Name:</p>
    <input type="text" placeholder=" " className="input"></input>
    <p>last name:</p>
    <input type="text" placeholder=" " className="input"></input>
    <p>Email:</p>
    <input type="email" placeholder=" " className="input"></input>
    <p>Phone no:</p>
    <input type="tel" placeholder=" " className="input"></input>
    <p>Message:</p>
    <input type="text" placeholder=" " className="input-message"></input>

<button type="submit" className="btn"> Submit</button>



</div>



<Footer/>
</div>

    )
}

export default contact;