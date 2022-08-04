import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import GlobalStyle from "../styles/globalStyle"
import UserContext from "../contexts/UserContext"
import HabitsContext from "../contexts/HabitsContext"
import HabitCreateContext from "../contexts/HabitCreateContext"
import ConcludedContext from "../contexts/ConcludedContext"
import LogIn from "./LogIn/LogIn"
import SignUp from "./SignUp/SignUp"
import Habits from "./Habits/Habits"
import Today from "./Today/Today"
import History from "./History/History"



export default function App() {
    const [user, setUser] = useState({})
    const [create, setCreate] = useState(false)
    const [habits, setHabits] = useState([])
    const [concluded, setConcluded] = useState('')
   

    return(
        <>
    <GlobalStyle />
    <ConcludedContext.Provider value={{concluded, setConcluded}}>
        <HabitsContext.Provider value={{ habits, setHabits }}>
            <UserContext.Provider value={{ user, setUser }}>
                <HabitCreateContext.Provider value={{create, setCreate}}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<LogIn />}></Route>
                            <Route path="/cadastro" element={<SignUp />}></Route>
                            <Route path="/habitos" element={<Habits />}></Route>
                            <Route path="/hoje" element={<Today />}></Route>
                            <Route path="/historico" element={<History />}></Route>
                        </Routes>
                    </BrowserRouter>
                </HabitCreateContext.Provider>
            </UserContext.Provider>
        </HabitsContext.Provider>
    </ConcludedContext.Provider>
    </>
    )
}