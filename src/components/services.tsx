import "../style/services.css"
import { FaPenNib } from "react-icons/fa6";
import { HiPaintBrush } from "react-icons/hi2";



import { HiMiniVideoCamera } from "react-icons/hi2";



function Services(){
    return(
        <main className="main">
            <div  className="ser-container">
                {/* top div */}
                <div className="top-div-ser">
                    <h2 className="title-ser">MY SERVICES</h2>
                    <p className="des-ser">I am a student skilled in graphic designing, video editing, and content writing,
                         combining creativity and tech to create engaging visuals, videos, and written content.</p>
                </div>
                {/* bottom div */}
                <div className="boxes-con">
                    <div className="box" >
                     <FaPenNib className="ser-icons"/>
                     <h3>Content Writing</h3>
                     <span>As a profession</span>
                    </div>
                    
                    <div className="box" >
                     <HiMiniVideoCamera  className="ser-icons"/>
                     <h3>Video Editing</h3>
                     <span>Passion</span>
                    </div>

                    <div className="box" >
                     < HiPaintBrush className="ser-icons"/>
                     <h3>Graphic Designing</h3>
                     <span>Work for Brands</span>
                    </div>

                </div>

            </div>
        </main>

        
    )
}
export default Services 