import styled from "styled-components"
import { useContext, useState } from "react"
import UserContext from "../../contexts/UserContext"
import HabitCreateContext from "../../contexts/HabitCreateContext"
import { postHabit, getHabitsToday } from "../../service/AxiosService"
import { ThreeDots } from "react-loader-spinner"

function DayButton({day, dayClick, index, selected}) {
    return (
        <Day selected={selected} onClick={()=>{dayClick(index);}}>{day}</Day>
    )
}

export default function HabitCreator({setHabits, habits, updater}) {

    const [weekDays, setWeekDays] = useState([{id: 'D', selected: false}, {id: 'S', selected: false}, {id: 'T', selected: false}, {id: 'Q', selected: false}, {id: 'Q', selected: false}, {id: 'S', selected: false}, {id: 'S', selected: false}])
    const { user } = useContext(UserContext)
    let { setCreate } = useContext(HabitCreateContext)
    const [name, setName] = useState('')
    let [days, setDays] = useState([])
    const [disable, setDisable] = useState(false)
    let body = {}

    function selectDay(index){
        if (weekDays[index].selected === false){
            setWeekDays([...weekDays, weekDays[index].selected = true])
        } else {
            setWeekDays([...weekDays, weekDays[index].selected = false])
        }
    }
    console.log(days)
    function dayClick(index) {
        selectDay(index)
        let aux = []
        for (let i = 0; i < days.length; i++){
            if (days[i] === index) {
                continue
            }
            aux.push(days[i])
        }
        if(aux.length === days.length){
            setDays([...days, index])
            console.log(days)
        } else {
            setDays(aux)
        } 
    }

    function saveHabit(e) {
        e.preventDefault();
        setDisable(true)
        if (days.length === 0) {
            alert('selecione pelo menos um dia para seu hábito.')
            setDisable(false)
            return
        }
        body = {...body, name: name, days: days}
        const promise = postHabit(body, user.token)
        promise.then((res) => {getHabitsToday(user.token).then(res => updater(res.data));setHabits([...habits, res.data]); setCreate(false);})

    }

    return (
        <Wrapper disable={disable}>
            <form onSubmit={saveHabit}>
                <Input disabled={disable ? 'disabled' : ''} placeholder=" nome do hábito" type='text' required onChange={e=> setName(e.target.value)}></Input>
                <Days>
                    {weekDays.map((d, index) => index < 7? <DayButton day={d.id} dayClick={dayClick} index={index} selected={d.selected}/> : "")}
                </Days>
                <Buttons disable={disable}>
                    <span onClick={() => setCreate(false)}>Cancelar</span>
                    <button type='submit' >{disable ? <ThreeDots color="white" height={30} width={80} /> : 'Salvar'}</button>
                </Buttons>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    margin: 30px auto 20px auto;
    width: 90vw;
    padding-left: 2vw;
    padding-right: 2vw;
    padding-top: 15px;
    padding-bottom: 7px;

`

const Input = styled.input`

    display: flex;
    background: ${props => props.disabled ? '#d5d5d5' : '#ffffff'};
    border: 1px solid ${props => props.disabled ? 'black' : '#d5d5d5'};
    border-radius: 5px;
    width: 85vw;
    height: 45px;
    font-size: 20px;
    margin-left: auto;
    margin-right: auto;

&::placeholder {
    color: #D5d5d5;
    font-weight: 500;
}
`

const Days = styled.div`
    margin-top: 7px;
    margin-left: 3px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const Day = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 4px;
    font-size: 20px;
    color: ${props => props.selected ? 'white' : 'gray'};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.selected ? '#d5d5d5' : 'white'};
    border: 2px solid ${props => props.disabled ? 'black' : '#d5d5d5'};
    border-radius: 5px;
    cursor: pointer;
`

const Buttons = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
button {
    width: 100px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #52B6FF;
    color: #FFFFFF;
    opacity: ${props => props.disabled ? 0.7 : 1};
    border-radius: 4.63636px;
    font-size: 16px;
    margin-right: 10px;
    cursor: pointer;
}
span {
    font-size: 16px;
    margin-bottom: 19px;
    margin-right: 23px;
    color: #52B6FF;
    cursor: pointer;
    opacity: ${props => props.disabled ? 0.7 : 1};
}
`