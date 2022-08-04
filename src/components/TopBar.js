import { useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../contexts/UserContext"
import styled from "styled-components"

export default function TopBar() {
    const { user } = useContext(UserContext)

    return(
        <Wrapper>
        <Link to="/">
        <h1>TrackIt</h1>
        </Link>
        
        <img src={user.image} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
z-index: 10;
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-right: 18px;
}
h1 {
    font-size: 39px;
    color: #ffffff;
    font-family: 'Playball', cursive;
    margin-left: 18px;
}
`