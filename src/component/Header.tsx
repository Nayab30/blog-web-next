import Link from "next/link"


const Navbar = () =>{
    return(
        
        <div className="navbar">

<div className="blog-name puff-in-center ">
    <h1>SALT & PEPPER</h1>
</div>
        <ul className="list">
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/About">ABOUT ME</Link></li>
        <li><Link href="/contact">CONTACT</Link></li>
        </ul>


        
        </div>
    )
}
export default Navbar