import Image from "next/image"
import "../style/hero.css"
import "../style/about.css"
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import Link from "next/link";

function About(){
    return(
        <div className="header-container">
            <div className="header-boxes-con">
                {/* left */}
                <div>
                    <Image src={"/images/javeria.jpg"}
                    width={200}
                    height={200}
                    className="header-image"
                     alt="profile"></Image>
                     <div className="social-icon">
                     <Link href={""}><CgMail className="s-icon1"/></Link>
                    <Link href={""}> <FaFacebook className="s-icon2"/></Link>
                     <Link href={""}><MdCall className="s-icon3"/></Link>
                     </div>

                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">About me
                    </h1>
                    <p className="des-hero">I am a student with a strong interest in graphic design, video editing, and content writing, 
                        always looking for new ways to express ideas and create engaging digital experiences.</p>
        
                </div>
            </div>
        </div>
    )
}
export default About