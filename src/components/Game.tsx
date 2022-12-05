import React, { useRef, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Admin from "./Admin";

const SMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const SGamePlay = styled.div`
  position: relative;
  overflow: hidden;
  width: 50%;
  background-image: url("blockbornBackground.png");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SGame = styled(SGamePlay)`
  align-items: center;
`;

const SPlayBox = styled.div`
  width: fit-content;
  position: absolute;
  transition: transform 0.2s cubic-bezier(0.02, 1.23, 0.79, 1.08);
`;

const SImg = styled.img`
  width: 200px;
  margin-top: 2rem;
`;

const SButton = styled.div`
  width: 13rem;
  height: 4rem;
  margin-bottom: 2rem;
  background: #d9d9d9;
  border-radius: 30px;
  display: grid;
  place-items: center;
  font-size: 2rem;
  cursor: pointer;
`;

const SScore = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 2.5rem;
  width: 9rem;
  height: 3.8rem;
  background: #02061d;
  border: 2px solid rgba(0, 209, 239, 0.7);
  border-radius: 2rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SBall = styled.div`
  background: black;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin: 0;
  background: radial-gradient(circle at 15px 15px, #57e4b3, #000);
`;

const Game = () => {
  const [gameView, setGameView] = useState("gameStart");
  const [streak, setStreak] = useState(0);
  const [difficulty, setDifficulty] = useState(3);

  const cubeStateRef = useRef({ x: 5000, y: 5000 });
  const ballStateRef = useRef({ x: 100, y: 0 });

  const cubeRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    handleBallMove(50);
  }, []);

  const handleBallMove = useCallback(
    (x: number) => {
      const height = (window as any).innerHeight;
      const width = (window as any).innerWidth / 2;

      let cubeCoord = cubeStateRef.current;
      let ballCoord = ballStateRef.current;

      let newX = x;

      // moves the ball down the screen
      ballStateRef.current = {
        x,
        y: ballCoord.y + difficulty,
      };

      // reset when the ball if reaches the end
      if (ballCoord.y > height) {
        newX = Math.random() * width;
        ballStateRef.current = {
          x: newX,
          y: 0,
        };
      }

      // wins if ball and cube coord are equal and resets
      if (ballCoord.y == cubeCoord.y || ballCoord.x == cubeCoord.x) {
        setStreak((prev) => {
          return prev + 1;
        });
        newX = Math.random() * width;
        ballStateRef.current = {
          x: newX,
          y: 0,
        };
      }

      if (ballRef.current) {
        ballRef.current.style.transform = `translate3d(${ballCoord.x}px, ${ballCoord.y}px, 0)`;
      }

      setTimeout(() => {
        handleBallMove(newX);
      }, 10);
    },
    [cubeStateRef, ballStateRef, difficulty]
  );

  const handleMouseMove = (event: any) => {
    cubeStateRef.current = {
      x: event.clientX - 90,
      y: event.clientY - 90,
    };

    const coords = cubeStateRef.current;

    if (cubeRef.current) {
      cubeRef.current.style.transform = `translate3d(${coords.x}px, ${coords.y}px, 0)`;
    }
  };

  return (
    <SMain>
      {gameView == "gameStart" ? (
        <SGame>
          <SImg src="/blockbornLogo.svg" alt="" />
          <SButton onClick={() => setGameView("gamePlay")}>Play!</SButton>
        </SGame>
      ) : (
        <SGamePlay onMouseMove={handleMouseMove}>
          <SScore>{streak}</SScore>
          <SBall ref={ballRef} />
          <SPlayBox ref={cubeRef}>
            <img src="/blockbornLogo.svg" style={{ width: "180px" }} alt="" />
          </SPlayBox>
        </SGamePlay>
      )}
      <Admin />
    </SMain>
  );
};

export default Game;
