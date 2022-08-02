import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "../styles/globalStyle"
import LogIn from "./LogIn/LogIn"


export default function App() {
    return(
        <>
    <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LogIn />}></Route>
            </Routes>
        </BrowserRouter>
    </>
    )
}