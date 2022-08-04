import styled from "styled-components"
import { useState, useContext } from "react"
import {logIn} from '../../service/AxiosService'
import { useNavigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"
import UserContext from "../../contexts/UserContext"

export default function FormLogIn () {

    const [form, setForm] = useState({})
    const [disable, setDisable] = useState(false)
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)



    function handleForm({ name, value }){
        console.log(name, value);
        setForm({
          ...form,
          [name]: value,
        });
    }

    function sendForm(e) {
        e.preventDefault();
        setDisable(true)
        console.log(form);
        const body = {
            ...form,
        }
        const promise = logIn(body)
        promise.then((res) => {setUser(res.data); navigate('/hoje');})
        promise.catch(() => {alert('Dados inválidos, tente novamente'); setDisable(false)})

    }


    return (
        <Form disabled={disable}>
            <form onSubmit={sendForm}>
                <input disabled={disable ? "disabled" : ""} type="email" name="email" placeholder=" email" required onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,})}/>
                <input type="password" name="password" placeholder=" senha" required onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,})}/>
                <button type="submit">{disable ? <ThreeDots color="white" height={30} width={80} /> : 'Enviar'}</button>
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
    background: ${props => props.disabled ? '#d5d5d5' : '#ffffff'};
    color: gray;
    border: 1px solid ${props => props.disabled ? 'black' : '#d5d5d5'};
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
    opacity: ${props => props.disabled ? 0.7 : 1};
    color: #FFFFFF;
    border-radius: 4.63636px;
    font-size: 21px;
    cursor: pointer;
}
`

