import { useContext, useEffect, useState } from "react"
import SearchInput from "./searchInput"
import { UserContext } from "../userContext"
import { Navigate, useNavigate } from "react-router"
import signOutIcon from "../assets/house-regular-full.svg"
import { Link } from "react-router"

function SignUp(){

    const{userName,setUserName,phoneNo,setPhoneNo,email,setEmail,
        password,setPassword,companyName,setCompanyName,isAgency,setIsAgency}=useContext(UserContext)

    const[isErr,setIsErr]=useState(false)
    const navigate=useNavigate()

    function handleCreateAcc(){
        if(!(userName&&phoneNo&&email&&password)){
            setIsErr(true)
            return;
        }
        navigate("/profile")
    }
    useEffect(()=>{
        setIsErr(false)
    },[userName,phoneNo,email,password])
        console.log({userName,phoneNo,email,password})

    return(
        <div className="main-body sign-up">
            <Link to="/"><img className="sign-out-icon" src={signOutIcon} title="home" alt="/home"></img></Link>
            <div className="info-text">
                <p id="sign-in-text">Create your<br></br> PopX account </p>
                {isErr&&<p id="err-msg">Please Enter All Details</p>}

            </div>
            <div className="action-div">
                <SearchInput 
                  label="Full Name"
                  placeholder="Enter your name "
                  type="text"
                  value={userName}
                  setValue={setUserName}
                  isRequired={true}
                />
                <SearchInput 
                  label="Phone number"
                  placeholder="Enter your phone number "
                  type="number"
                  value={phoneNo}
                  setValue={setPhoneNo}
                                    isRequired={true}

                />
                <SearchInput 
                  label="Email adress"
                  placeholder="Enter your email adress"
                  type="text"
                  value={email}
                  setValue={setEmail}
                                    isRequired={true}

                />
                <SearchInput 
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  setValue={setPassword}
                                    isRequired={true}

                />
                <SearchInput 
                  label="Company name"
                  placeholder="Enter your company name "
                  type="text"
                  value={companyName}
                  setValue={setCompanyName}
                                    isRequired={false}

                />
                <p>Are you an Agency?<span className="required">*</span></p>
                <div className="radio-action">
                    <div> 
                        <input 
                        type="radio"
                        name="yes"
                        checked={isAgency}
                        onChange={()=>setIsAgency(prev=>!prev)}
                        />
                        <label>Yes</label>
                    </div>
                    <div>
                        <input 
                        type="radio"
                        name="no"
                        checked={!isAgency}
                        onChange={()=>setIsAgency(prev=>!prev)}
                        />
                        <label>No</label>
                    </div>
                    
                </div>

            </div>
            <button onClick={handleCreateAcc}>Create Account</button>
        </div>
    )
}

export default SignUp