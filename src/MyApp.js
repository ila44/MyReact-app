import './MyApp.css'

function MyApp() {
    return (
        <div className="myApp">
            <div className="left">
                <h1>Welcome to <br/>
                    MX Score
                </h1>
                <h2>Sed up interval</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
                <button className="mybtn" >Learn More</button>
            </div>
            <div className="right">
                <div className="container">
                    <div className="cont-left">
                        <h1>Ready to get Started?</h1>
                        <h3>Sign up or contact us</h3>
                    </div>
                    <div className="cont-right">
                        <button className="mybtns">Signup Here</button>
                        <button className="mybtns">Contact Us</button>
                    </div>
                </div>

                <div className="forms">
                    <form className="myform">
                        <h6>  Registered Members, Login Here</h6>
                        <input type="email" className="form-control" placeholder="email" autoFocus />
                        <input type="password" className="form-control" placeholder="password" /> 
                        <input type="button" className="form-control btn" value="LOGIN" />
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MyApp;