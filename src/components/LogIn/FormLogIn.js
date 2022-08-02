import styled from "styled-components"
import { useState } from "react"
import {logIn} from '../../service/AxiosService'
import { useNavigate } from "react-router-dom"

export default function FormLogIn () {

    const [form, setForm] = useState({})
    const navigate = useNavigate()


    function handleForm({ name, value }){
        console.log(name, value);
        setForm({
          ...form,
          [name]: value,
        });
    }

    function sendForm(e) {
        e.preventDefault();
        console.log(form);
        const body = {
            ...form,
        }
        const promise = logIn(body)
        promise.then((res) => {console.log(res.data); navigate('/habitos')})
        promise.catch(() => alert('Dados inválidos, tente novamente'))

    }




    return (
        <Form>
            <form onSubmit={sendForm}>
                <input type="email" name="email" placeholder=" email" required onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,})}/>
                <input type="password" name="password" placeholder=" senha" required onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,})}/>
                <button type="submit">Entrar</button>
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
button {
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
    cursor: pointer;
}
`

