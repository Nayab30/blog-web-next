import Navbar from "@/component/Header"
import Image from "next/image";
import image2 from "/Netxtjs Assignment/blog-web/public/m1b.webp"
import Footer from "@/component/Footer";
const blog4 = () =>{
    return(
<div>
<Navbar/>
<div>

<div className="Image-banner">
<Image src={image2} alt="image" className="blog-image"></Image>
</div>
<div className="blog-content">

<h1>Skirt steak with caramelized broccoli</h1>
<p>Welcome to your blog post. Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags (#vacation #dream #summer) throughout your posts to reach more people, and help visitors search for relevant content. 


Blogging gives your site a voice, so let your business’ personality shine through. Choose a great image to feature in your post or add a video for extra engagement. Are you ready to get started? Simply create a new post now.Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more. </p>

<div className="content-qoutes">
<p>"Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there's a stunning layout for everyone."</p>
</div>


</div>
<Footer/>
</div>

</div>
    )
}

export default blog4;