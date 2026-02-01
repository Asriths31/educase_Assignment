import { useContext, useEffect, useState } from "react"
import { UserContext } from "../userContext"
import SearchInput from "./searchInput"
import { useNavigate } from "react-router"
import signOutIcon from "../assets/house-regular-full.svg"
import { Link } from "react-router"

function SignIn(){

    const{email,setEmail,password,setPassword}=useContext(UserContext)
        const[isErr,setIsErr]=useState(false)
        const navigate=useNavigate(null)
    
    function handleLogin(){ 
            if(!(email&&password)){
                setIsErr(true)
                return;
            }
            navigate("/profile")
        }
        useEffect(()=>{
            setIsErr(false)
        },[email,password])

    return(
        <div className="main-body sign-in">
                          <Link to="/"><img className="sign-out-icon" src={signOutIcon} title="home" alt="/home"></img></Link>

            <div className="info-text">
                <p id="sign-in-text">Signin to your<br></br> PopX account </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <p 
                id="err-msg"
                style={{
                    visibility:isErr?"visible":"hidden"
                }}
                >Please Enter All Details</p>

            </div>
           <div className="action-div">
                <SearchInput 
                  label="Email"
                  placeholder="Enter email address"
                  type="text"
                  value={email}
                  setValue={setEmail}
                  isRequired={false}
                />
                <SearchInput 
                  label="Password"
                  placeholder="Enter password"
                  type="text"
                  value={password}
                  setValue={setPassword}
                  isRequired={false}
                />
                
                <button onClick={handleLogin}>Login</button>

            </div> 
        </div>
    )
}


export default SignIn