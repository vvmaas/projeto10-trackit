import { deleteHabit, getHabits } from "../../service/AxiosService"
import UserContext from "../../contexts/UserContext"
import { useContext } from "react"
import styled from "styled-components"
import trash from "../../assets/Vector.png"

function DayButton({ index, selected}) {
    return (
        <Day selected={selected}>{index}</Day>
    )
}

export default function HabitCard({key,id,name,days,setHabits}) {

    const weekDays = [{id: 'D', number: 0}, {id: 'S', number: 1}, {id: 'T', number: 2}, {id: 'Q', number: 3}, {id: 'Q', number: 4}, {id: 'S', number: 5}, {id: 'S', number: 6}]
    const {user} = useContext(UserContext)

    function isInDays(number, days) {
        for (let i =0; i < days.length; i++){
            if (days[i] === number) {
                return true 
            }
        }
        return false
    }

    return (
        <HabitCardWrap>
            <h1>{name}</h1>
            <Days>
                {weekDays.map(day => isInDays(day.number, days) ? <DayButton index={day.id} selected={true}/> : <DayButton index={day.id} selected={false}/>)}
            </Days>
            <img src={trash} alt="delete" onClick={() => {deleteHabit(user.token, id).then(getHabits(user.token).then(res=>setHabits(res.data)))}}/>
        </HabitCardWrap>
    )
}

const HabitCardWrap = styled.div`
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
h1 {
    font-size: 20px;
    margin: 0 0 8px 15px
}
img {
    width: 13px;
    height: 15px;
    position: absolute;
    top: 11px;
    right: 10px;
    cursor: pointer;
}
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
    border: 2px solid #d5d5d5;
    border-radius: 5px;
`

const Days = styled.div`
    margin-left: 14px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`