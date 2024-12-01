
import Navbar from "@/component/Header"
import Footer from "@/component/Footer"
import Image from "next/image"
import image from "/Netxtjs Assignment/blog-web/public/image.jpg";
import Link from "next/link";
import image2 from "/Netxtjs Assignment/blog-web/public//m5c.webp"
import image3 from "/Netxtjs Assignment/blog-web/public/m5d.webp"
import image4 from "/Netxtjs Assignment/blog-web/public/m10a.webp"
import image5 from "/Netxtjs Assignment/blog-web/public/m1b.webp" 
import image6 from "/Netxtjs Assignment/blog-web/public/m7c.webp"
import image7 from "/Netxtjs Assignment/blog-web/public/m8f.webp"

export default function Home(){
  return(
    <div className="home">
      <div className="main-page">
  <Navbar/>
<div className="Image-banner">
<Image src={image} alt="image" className="Image-banner-img"></Image>
</div>

<div className="blog-cards">

<div className="card">
  <div className="w-60 h-60 bg-orange-300 mx-1.5 ">
  <Image src={image2} alt="image2"  className="h-60 "></Image>
  </div>
<h1 className="font-bold text-lg my-4" >Italian inspiration on a budget </h1>
{/* <p> Lorem ipsum de praesentium officiis nemo sed soluta, iste nulla dolorum.</p> */}
<Link href="/blog1">READ MORE</Link>
</div>

<div className="card">
  <div className="w-60 h-60 bg-orange-300 mx-1.5">
  <Image src={image3} alt="image3"  className="h-60 "></Image>
  
  </div>
<h1 className="font-bold text-lg my-4">Plating made easy: feast with your eyes</h1>
{/* <p> Lorem ipsum de praesentium officiis nemo sed soluta, iste nulla dolorum.</p> */}
<Link href="/blog2">READ MORE</Link>
</div>

<div className="card">
  <div className="w-60 h-60 bg-orange-300 mx-1.5">
  <Image src={image4} alt="image4"  className="h-60 w-60"></Image>
  
  </div>
<h1 className="font-bold text-lg my-4">Entertaining made easy: 3 ingredient crostinis</h1>
{/* <p> Lorem ipsum de praesentium officiis nemo sed soluta, iste nulla dolorum.</p> */}
<Link href="/blog3">READ MORE</Link>
</div>

<div className="card">
  <div className="w-60 h-60 bg-orange-300 mx-1.5">
  <Image src={image5} alt="image5"  className="h-60 w-60"></Image>
  
  </div>
<h1 className="font-bold text-lg my-4">Skirt steak with caramelized broccoli</h1>
{/* <p> Lorem ipsum de praesentium officiis nemo sed soluta, iste nulla dolorum.</p> */}
<Link href="/blog4">READ MORE</Link>
</div>

<div className="card">
  <div className="w-60 h-60 bg-orange-300  mx-1.5">
  <Image src={image6} alt="image6"  className="h-60 "></Image>
  
  </div>
<h1 className="font-bold text-lg my-4">Oven roasted asparagus with herb vinaigrette</h1>
{/* <p> Lorem ipsum de praesentium officiis nemo sed soluta, iste nulla dolorum.</p> */}
<Link href="/blog5">READ MORE</Link>
</div>

<div className="card">
  <div className="w-60 h-60 bg-orange-300 mx-1.5">
  <Image src={image7} alt="image7"  className="h-60 w-60 "></Image>
  
  </div>
<h1 className="font-bold text-lg my-4">Cold smash drink ice coffee</h1>
{/* <p> Lorem ipsum de praesentium officiis nemo sed soluta, iste nulla dolorum.</p> */}
<Link href="/blog6">READ MORE</Link>
</div>



</div>
  <Footer/>
  </div>
    </div>
  )
}