import {BrowserRouter,Routes,Route} from "react-router"
import './App.css'
import SignIn from "./comp/signIn"
import UserContextProvider  from "./userContext"
import SignUp from "./comp/signUp"
import Profile from "./comp/profile"
import Home from "./comp/home"

function App() {

  return (
    <div>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  )
}

export default App
