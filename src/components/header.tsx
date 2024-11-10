
import Image from "next/image";
import Link from "next/link";
import "../style/header.css";

function Header(){
    return(
        <div className="header">
            {/* left*/}
            <div>
              
                <h1 className="logo">My Portfolio</h1>
            </div>
            {/* right */}
            <div className="header-right-div">
                <ul className="header-links">
                    <li>
                        <Link className="nav-links" href={"/"}>HOME</Link>
                    </li>
                    <li>
                        <Link className="nav-links"href={"/about"}>ABOUT</Link>
                    </li>
                    <li>
                        <Link className="nav-links"href={"/contact"}>CONTACT </Link>
                    </li>
                </ul>
            </div>
         
        </div>
    )
}

export default Header