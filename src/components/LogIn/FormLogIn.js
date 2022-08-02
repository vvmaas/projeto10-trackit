import styled from "styled-components"

export default function FormLogIn () {
    return (
        <Form>
            <form>
                <input type="email" name="email" placeholder=" email" required/>
                <input type="password" name="password" placeholder=" senha" required/>
                <div type="submit" name="submit">Entrar</div>
            </form>
        </Form>
    )
} 

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    text-align: center;
input {
    width: 85vw;
    height: 45px;
    margin-bottom: 5px;
    background: #FFFFFF;
    color: gray;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
}
div {
    margin: 0 auto;
    width: 85vw;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #52B6FF;
    color: #FFFFFF;
    border-radius: 4.63636px;
    font-size: 21px;
}
`

