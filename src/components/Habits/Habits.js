import { useContext, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { getHabits } from "../../service/AxiosService"
import UserContext from "../../contexts/UserContext"
import HabitCreateContext from "../../contexts/HabitCreateContext"
import HabitsContext from "../../contexts/HabitsContext"
import ConcludedContext from "../../contexts/ConcludedContext"
import TopBar from "../TopBar"
import BottomMenu from "../BottomMenu"
import HabitCreator from "./HabitCreator"
import HabitCard from "./HabitCard"
import styled from "styled-components"

export default function Habits() {
    const {habits, setHabits} = useContext(HabitsContext)
    const {create, setCreate} = useContext(HabitCreateContext)
    const { setConcluded } = useContext(ConcludedContext)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    console.log(user)
   

    

    useEffect(()=>{
        if (user.token === undefined){
            navigate('/')
        }
        getHabits(user.token).then((res) => {setHabits(res.data)})
        console.log(user.token)
    }, [])

    function updater(data) {
        console.log(data);
        let nDone = 0
        let nTotal = 0
        for (let i = 0; i < data.length ; i++) {
            console.log(data[i].done)
            if (data[i].done === true) {
                nDone++
            }
            nTotal++
        }
        console.log(nDone, nTotal)
        let percentage = Math.round((nDone/nTotal)*100)
        isNaN(percentage) ? setConcluded(0) : setConcluded(percentage)
    }

    return(
        <Background>
        <TopBar />
        <Wrapper>
            <CreateHabit>
            <h2>Meus hábitos</h2>
            <div onClick={() => setCreate(!create)}>+</div>
            </CreateHabit>

            {create ? <HabitCreator setHabits={setHabits} habits={habits} updater={updater}/> : ""}

            <HabitList>
                {habits.length > 0 ? habits.map((habit) => <HabitCard key={habit.id} id={habit.id} name={habit.name} days={habit.days} setHabits={setHabits} updater={updater} />) : <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>}
            </HabitList>

        </Wrapper>
        <BottomMenu />
        </Background>
    )
}

const Wrapper = styled.div`
    width: 90vw;
    margin: 0 auto;
span {
    display: flex;
    margin-top: 20px;
    font-size: 18px;
    line-height: 23px;
    color: #666666;
}
`

const Background = styled.div`
    height: fit-content;
    min-height: 200vw;
    background-color: #efefef;
`

const CreateHabit = styled.div`
    padding-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 23px;
h2 {
    font-size: 23px;
    color: #126ba5;
}
div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    color: #ffffff;
    font-size: 25px;
    line-height: 34px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    cursor: pointer;
}
`

const HabitList = styled.div`
    display: flex;
    flex-direction: column-reverse;
    padding-bottom: 100px;
    
`