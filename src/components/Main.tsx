import React from 'react'
import styled from 'styled-components'

interface IView {
  setView: React.Dispatch<React.SetStateAction<string>>
}

const SMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 60rem;
  margin: 5.5rem 1rem;
`;

const SText = styled.p`
font-family: 'Offside';
font-style: normal;
font-size: 5.8rem;
line-height: 6rem;
`;

const STextRight = styled(SText)`
  text-align: right;
  padding-top: 1.3rem;
`;

const SButton = styled.div`
width: 20rem;
height: 5.3rem;
margin-top: 6.5rem;
background: linear-gradient(90deg, rgba(0, 209, 239, 0.5) -16.4%, rgba(33, 255, 154, 0.5) 113.52%);;
border-radius: 50px;
display: grid;
place-items: center;
color: white;
font-size: 2.5rem; 
cursor: pointer;
`;

const SBox = styled.div`
display: flex;
justify-content: center;
`;

const SGreenImage = styled.img`
position: fixed;
left: -8.85%;
right: 74.74%;
top: 6.72%;
bottom: 40.17%;
`

const Main: React.FC<IView> = ({ setView }) => {
  return (
    <SMain>
      <SGreenImage src='/GameGreen.svg' />
      <SText>Mini Game</SText>
      <STextRight>Wallet Profile</STextRight>
      <SBox>
        <SButton onClick={() => setView("intro")}>Explore!</SButton>
      </SBox>
    </SMain>
  )
}

export default Main