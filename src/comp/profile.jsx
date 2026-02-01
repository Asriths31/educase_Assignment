import { useContext } from "react"
import { UserContext } from "../userContext"
import userLogo from "../assets/Ellipse 114/Ellipse 114.png"
import cameraIcon from "../assets/Group 1585.svg"
import signOutIcon from "../assets/house-regular-full.svg"
import { Link } from "react-router"
function Profile(){

    const{userName,email}=useContext(UserContext)

    return(
        <div className="main-body profile">
            <header>
                <p>Account Settings</p>
              <Link to="/"><img src={signOutIcon} title="home" alt="/home"></img></Link>
            </header>
            <div className="profile-div">
                <div className="logo">
                    <img src={userLogo} alt="Profile-Image"></img>
                    <img src={cameraIcon} className="icon"></img>
                </div>
                <div className="info">
                    <p className="user-name">{userName??"Marry Doe"}</p>
                    <p>{email??"Marry@gmail.com"}</p>
                </div>
            </div>
            <p>
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
        </div>
    )
}

export default Profile