
import styled from "styled-components"

export default function BottomMenu() {
    return (
        <Wrapper>
            <span>Hábitos</span>

            <div></div>

            <span>Histórico</span>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
span {
    color: #52B6FF;
    width: calc(100vw/3);
    font-size: 18px;
    margin-bottom: 5px;
    text-align: center;
    cursor: pointer;
}
div {
    height: 90px;
    width: 90px;
    border-radius: 70px;
    background: #52B6FF;
    margin-bottom: 40px;
    cursor: pointer;
}
`