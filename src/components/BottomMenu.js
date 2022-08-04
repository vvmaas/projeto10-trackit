import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components"

export default function BottomMenu() {
    return (
        <Wrapper>
            <span>Hábitos</span>

            <div><CircularProgressbar value={60} text={`Hoje`} styles={{
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: `white`,
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'round',
      // Customize transition animation
      transition: 'stroke-dashoffset 0.5s ease 0s',
      // Rotate the path
      transformOrigin: 'center center',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: '#52B6FF',
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Rotate the trail
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    // Customize the text
    text: {
      // Text color
      fill: '#ffffff',
      // Text size
      fontSize: '20px',
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: '#3e98c7',
    },
  }}/></div>

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
    border: #52B6FF solid 4px;
    border-radius: 70px;
    background: #52B6FF;
    margin-bottom: 40px;
    cursor: pointer;
}
`