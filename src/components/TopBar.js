import { useContext } from "react"
import UserContext from "../contexts/UserContext"
import styled from "styled-components"

export default function TopBar() {
    const { user } = useContext(UserContext)
    console.log(user)

    return(
        <Wrapper>
        <h1>TrackIt</h1>
        <img src={user.image} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
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