import React, { useState } from 'react'
import styled from 'styled-components';

interface IView {
  setView: React.Dispatch<React.SetStateAction<string>>
}

const SMain = styled.div`
  width: 100vw;
  display: grid;
  place-items: center;
  height: 100vh;
`;

const SContent = styled.div`
width: 40rem;
height: 26rem;
border-radius: 30px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 2px solid  rgba(0, 209, 239, 0.3);
background: #fafafa;
`;

const SControls = styled.div`
margin: 1.5rem 3rem;
display: flex;
justify-content: space-between;
align-items: center;
`

const SArrow = styled.div`
background: linear-gradient(90deg, rgba(0, 209, 239, 0.5) -16.4%, rgba(33, 255, 154, 0.5) 113.52%);;
  width: 60px;
  height: 60px;
  cursor: pointer;
  border-radius: 50%;
  display: grid;
  place-items: center;
`

const SMessage = styled.p`
text-align: center;
margin: 1rem 3rem;
font-size: 1.2rem;
line-height: 2rem;
`

const SImg = styled.img`
width: 30px;
`
const SGreenImage = styled.img`
position: fixed;
left: -8.85%;
right: 74.74%;
bottom: 35.17%;
`

const SBlueImage = styled.img`
position: fixed;
right: -9.96%;
bottom: 9.49%;`


const message =
  [
    "User generates an implicit account and sends it to the backend.",
    "Admin gets a received address and deploys a wallet contract connected to the users implicit account.",
    "This contract is the Mingwall Profile. It contains a profile of the user's game achievement which can be used to generate a game activity.",
    "Let's play a game to see how it works!"
  ]

const Intro: React.FC<IView> = ({ setView }) => {
  const [index, setIndex] = useState(0)

  const prevButton = () => {
    if (index == 0) return;
    setIndex(index - 1);
  };

  const nextButton = () => {
    if (index + 1 == message.length) {
      setView("game");
      return;
    }
    setIndex(index + 1);
  };

  return (
    <SMain>
      <SContent>
        <SGreenImage src='/GameGreen.svg' />
        <SBlueImage src='/GameBlue.svg' />

        {/* <div> */}
        <SMessage style={{ fontWeight: 500 }}>How it works</SMessage>
        <SMessage>{message[index]}</SMessage>
        {/* </div> */}

        <SControls>
          <SArrow onClick={prevButton}>
            <SImg src="/ArrowLeft.svg" alt="" />
          </SArrow>
          <SArrow onClick={nextButton}>
            <SImg src="/ArrowRight.svg" alt="" />
          </SArrow>
        </SControls>
      </SContent>
    </SMain>
  )
}

export default Intro