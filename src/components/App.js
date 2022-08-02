import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "../styles/globalStyle"
import LogIn from "./LogIn/LogIn"
import SignUp from "./SignUp/SignUp"


export default function App() {
    return(
        <>
    <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LogIn />}></Route>
                <Route path="/cadastro" element={<SignUp />}></Route>
            </Routes>
        </BrowserRouter>
    </>
    )
}