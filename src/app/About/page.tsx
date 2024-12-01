import Navbar from "@/component/Header"
import Image from "next/image";
import imgabout from "/Netxtjs Assignment/blog-web/public/about1.jpeg";
import Footer from "@/component/Footer";

const blog = () =>{
    return(
        <div>
<Navbar/>
<div className="about">
    <h1>ABOUT ME</h1>
    <div className="about-image">
<Image src={imgabout} alt="aboutimage" className="about-image"></Image>
    </div>
    </div>
    <div className="about-content">
    <p>Hey there! I’m Sofie H., a passionate blogger with a knack for storytelling and a love for our niche or interests, e.g., tech gadgets, sustainable living, epic travel adventures. Whether I’m diving deep into the latest trends, sharing personal experiences, or offering tips and insights, my goal is to inspire, inform, and entertain you.

Each post is crafted with a blend of curiosity, creativity, and a dash of wit. I believe in the power of words to spark conversations, challenge perspectives, and create connections. So, come along for the ride! Let’s explore, learn, and grow together in this vast digital world.

When I'm not blogging, you can find me hobbies or other activities, e.g., exploring local coffee shops, hiking new trails, or buried in a good book. My journey is driven by a thirst for knowledge and a desire to make meaningful connections.

Here’s a fun fact: unique trivia about yourself, e.g., "I once lived in three different countries within a year" or "I collect vintage postcards from around the world".

I’d love for you to join the conversation. Feel free to reach out, share your thoughts, and let’s build a community of curious minds together!

</p>
</div>

<Footer/>

</div>
    )
}

export default blog;