import "../style/contact.css"
function Contact(){
    return(
        <main className="contact-main">
            <div className="form-container1">
                <h1 className="con-title">Contact Me</h1>
<form action="" className="form">
    <input type="text" placeholder="Enter Your Name" />
    <input type="gmail" placeholder="Enter Your Gmail" />
    <input className="msg" type="text" placeholder="Enter Your Message" />
</form>
<button className="btn">Submit</button>
</div>
        </main>
    )
}
export default Contact