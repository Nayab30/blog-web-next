import Link from "next/link"


const Footer = () => {
    return(
        <div className="footer">
  <ul className="list-footer">
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/About">ABOUT ME</Link></li>
        <li><Link href="/contact">CONTACT</Link></li>
        </ul>
        <div className="footer-describe">
        <h2> &copy; Copyright</h2>
       <p>Designed by NAYAB ASLAM</p>
       </div>
        </div>
    )
}

export default Footer;