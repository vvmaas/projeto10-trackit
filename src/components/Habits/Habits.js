import { useContext } from "react"
import UserContext from "../../contexts/UserContext"
import TopBar from "../TopBar"
import BottomMenu from "../BottomMenu"

export default function Habits() {
    const { user, setUser } = useContext(UserContext)
    console.log(user)

    return(
        <>
        <TopBar />
        <BottomMenu />
        </>
    )
}