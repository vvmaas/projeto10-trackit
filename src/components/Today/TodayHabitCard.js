 import { useState, useContext } from "react"
 import styled from "styled-components"
 import check from "../../assets/check.png"
 import UserContext from "../../contexts/UserContext"
 //import ConcludedContext from "../../contexts/ConcludedContext"
 import { habitDone, habitUndone } from "../../service/AxiosService"
 
 export default function TodayHabitCard ({id, name, current, highest, done, setPercent}) {

    const [checked, setChecked] = useState(done)
    let [curr, setCurr] = useState(current)
    let [high, setHigh] = useState(highest)
    const {user} = useContext(UserContext)
    //const {concluded, setConcluded} = useContext(ConcludedContext)

    function checkClick() {
        if (checked === true) {
            habitUndone(user.token, id)
            setChecked(false)
            if (high === curr) {
                setCurr(curr-1)
                setHigh(high-1)
            } else {
                setCurr(curr-1)
            }
            setPercent(false)
            } 
        if (checked === false) {
            habitDone(user.token, id)
            setChecked(true)
            if (high === curr) {
                setCurr(curr+1)
                setHigh(high+1)
            } else {
                setCurr(curr+1)
            }
            setPercent(true)
        }
    }

    return (
        <THCard>
            <THInfo>
                <h2>{name}</h2>
                <Current checked={checked}>Sequência atual: <em>{curr} {curr == 1 ? 'dia' : 'dias'}</em></Current>
                <Highest checked={checked} current={curr} highest={high}>Seu recorde: <em>{high} {high == 1 ? 'dia' : 'dias'}</em></Highest>
            </THInfo>
            <THCheck checked={checked} onClick={() => checkClick()}>
                <img src={check} alt='check'/>
            </THCheck>
        </THCard>
    )
 }

 const THCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    border-radius: 5px;
    height: 95px;
    margin-bottom: 13px;
 `

const THInfo = styled.div`
    margin: 10px 0 10px 15px;
h2 {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
}
 `

const THCheck = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: ${props => props.checked ? '#8FC549' : '#EBEBEB'};
border-radius: 5px;
border: ${props => props.checked ? '' : '1px solid #E7E7E7'};
width: 69px;
height: 69px;
margin-right: 13px;
cursor: pointer;
`

const Current = styled.h4`
    margin-top: 5px;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
em {
    color: ${props => props.checked ? '#8FC549' : '#666666'};
}
`

const Highest = styled.h4`
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
em {
    color: ${props => props.checked && props.current === props.highest ? '#8FC549' : '#666666'};
}
`
