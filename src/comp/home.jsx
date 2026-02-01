import { Link } from "react-router"



function Home(){

    return(
        <div className="main-body home">
            <div className="info-text">
                <p id="sign-in-text">Welcome to PopX</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
           <div className="action-div">
                <Link to={"/signUp"}><button>Create Account</button></Link>
                <Link to={"/signIn"}><button>Already Registered? Login</button></Link>

            </div>
        </div>
    )
}

export default Home