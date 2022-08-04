import dayjs from "dayjs";
import styled from "styled-components";
import { getHabitsToday } from "../../service/AxiosService";
import { useState, useContext, useEffect } from "react";
import ConcludedContext from "../../contexts/ConcludedContext";
import TodayHabitCard from "./TodayHabitCard";
import UserContext from "../../contexts/UserContext";
import TopBar from "../TopBar";
import BottomMenu from "../BottomMenu";


export default function Today(){

    let day = dayjs()
    const [habitsToday, setHabitsToday] = useState([])
    let [done, setDone] = useState(0)
    const { user } = useContext(UserContext)
    const {concluded, setConcluded} = useContext(ConcludedContext)
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta','Sábado']

    useEffect(()=>{
        getHabitsToday(user.token).then((res) => {firstRender(res.data)})
    }, [])

    function firstRender(data) {
        let nDone = 0
        let nTotal = 0
        for (let i = 0; i < data.length ; i++) {
            if (data[i].done === true) {
                nDone++
            }
            nTotal++
        }
        let percentage = Math.round((nDone/nTotal)*100)
        setDone(nDone)
        setConcluded(percentage)
        setHabitsToday(data)
    }

    function setPercent(mod) {
        let percentage = 0
        if (mod == false) {
            percentage = Math.round(((done-1)/habitsToday.length)*100)
            setDone(done-1)
        }
        if (mod == true) {
            percentage = Math.round(((done+1)/habitsToday.length)*100)
            setDone(done+1)
        }
        setConcluded(percentage)
    }



    return (
        <Background>
        <TopBar />
        <Wrapper>
            <DayInfo concluded={concluded}>
                <h1>{weekDays[day.$W]}, {day.$D < 10 ? '0' : ''}{day.$D}/{day.$M < 9 ? '0' : ''}{day.$M + 1}</h1>
                <span>{concluded == 0 ? "Nenhum hábito concluído ainda" : `${concluded}% dos hábitos concluídos`}</span>
            </DayInfo>

            <DayHabits>
                {habitsToday.map(habit => <TodayHabitCard setPercent={setPercent}id={habit.id} name={habit.name} current={habit.currentSequence} highest={habit.highestSequence} done={habit.done}/>)}
            </DayHabits>

        </Wrapper>
        <BottomMenu />
        </Background>
    )
}

const Background = styled.div`
    height: fit-content;
    min-height: 200vw;
    background-color: #efefef;
`

const Wrapper = styled.div`
    padding-top: 100px;
`

const DayInfo = styled.div`
    width: 90vw;
    margin: 0 auto;
h1 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
}
span {
    font-size: 17.976px;
    line-height: 22px;
    color: ${props => props.concluded == 0 ? '#BABABA' : '#8FC549'};
}
`

const DayHabits = styled.div`
    width: 90vw;
    margin: 20px auto 0 auto;
    display: flex;
    flex-direction: column-reverse;
`