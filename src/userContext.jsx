import { createContext } from "react";
import { useState } from "react";


export const UserContext=createContext(null)


function UserContextProvider({children}){

    const[userName,setUserName]=useState(null);
    const[phoneNo,setPhoneNo]=useState(null);
    const[email,setEmail]=useState(null)
    const[password,setPassword]=useState(null);
    const[companyName,setCompanyName]=useState(null);
    const[isAgency,setIsAgency]=useState(false);
    return(
        <UserContext.Provider 
        value={{userName,setUserName,phoneNo,setPhoneNo,email,setEmail,
        password,setPassword,companyName,setCompanyName,isAgency,setIsAgency}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider