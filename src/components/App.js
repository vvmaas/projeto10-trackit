import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import GlobalStyle from "../styles/globalStyle"
import UserContext from "../contexts/UserContext"
import HabitCreateContext from "../contexts/HabitCreateContext"
import LogIn from "./LogIn/LogIn"
import SignUp from "./SignUp/SignUp"
import Habits from "./Habits/Habits"



export default function App() {
    const [user, setUser] = useState({})
    const [create, setCreate] = useState(false)
   

    return(
        <>
    <GlobalStyle />
    <UserContext.Provider value={{ user, setUser }}>
    <HabitCreateContext.Provider value={{create, setCreate}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LogIn />}></Route>
                <Route path="/cadastro" element={<SignUp />}></Route>
                <Route path="/habitos" element={<Habits />}></Route>
                
                
            </Routes>
        </BrowserRouter>
    </HabitCreateContext.Provider>
    </UserContext.Provider>
    </>
    )
}