import Image from "next/image"
import "../style/hero.css"
function Hero(){
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
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">
                        I am Javeria Hussain
                    </h1>
                    <p className="des-hero">I’m a <b>Student</b> I am a matric student pursuing courses in Artificial Intelligence, the Metaverse, and Graphic Designing. I am passionate about combining technology and creativity,
                     aiming to explore virtual worlds and develop skills in both design and emerging tech.</p>
       
                </div>
            </div>
        </div>
    )
}
export default Hero