import FormLogIn from "./FormLogIn"
import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function LogIn() {
    return (
        <Wrapper>
            <Logo>
                <img src="../assets/chart.png" alt="" />
                <h1>TrackIt</h1>
            </Logo>
            <FormLogIn />
            <Link to="/cadastro">
                <span>Não tem uma conta? Cadastre-se!</span>
            </Link>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: auto auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 88vh;
    width: 100vw;
span {
    display: flex;
    color: #52B6FF;
    text-decoration: underline;
    font-size: 14px;
    margin-top: 30px; 
    cursor: pointer;
}
`

const Logo = styled.div`
    margin: 0 auto 30px auto;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

img {
    width: 55vw;
    height: 20vh;
}
h1 {
    font-size: 19vw;
    color: #126BA5;
    font-family: 'Playball', cursive;
}
`