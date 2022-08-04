import TopBar from "../TopBar";
import BottomMenu from "../BottomMenu";
import styled from "styled-components";


export default function History() {
    return(
        <Background>
            <TopBar />
            <Wrapper>
            <HistInfo >
                <h1>Histórico</h1>
                <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
            </HistInfo>
            </Wrapper>
            <BottomMenu />
        </Background>
    )
}

const Background = styled.div`
    height: fit-content;
    min-height: 100vh;
    background-color: #efefef;
`

const Wrapper = styled.div`
    padding-top: 100px;

`

const HistInfo = styled.div`
    width: 90vw;
    margin: 0 auto;
h1 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
}
span {
    display: flex;
    margin-top: 10px;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
}
`