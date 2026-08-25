"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Gamepad2, RotateCcw, Trophy, Play, Pause, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, LogOut } from 'lucide-react';
import { useOSStore } from '@/store/useOSStore';

const GRID_SIZE = 28;
const INITIAL_SPEED = 120;

type Position = { x: number; y: number };
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export const SnakeGame: React.FC = () => {
  const { setActiveWorkspace } = useOSStore();
  const [snake, setSnake] = useState<Position[]>([
    { x: 10, y: 10 },
    { x: 10, y: 11 },
    { x: 10, y: 12 }
  ]);
  const [food, setFood] = useState<Position>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Direction>('UP');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const directionRef = useRef(direction);
  directionRef.current = direction;

  const generateFood = (currentSnake: Position[]): Position => {
    let newFood: Position;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      };
      if (!currentSnake.some((segment) => segment.x === newFood.x && segment.y === newFood.y)) {
        break;
      }
    }
    return newFood;
  };

  const resetGame = () => {
    const initSnake = [
      { x: 10, y: 10 },
      { x: 10, y: 11 },
      { x: 10, y: 12 }
    ];
    setSnake(initSnake);
    setFood(generateFood(initSnake));
    setDirection('UP');
    setScore(0);
    setGameOver(false);
    setIsPaused(false);
    setIsStarted(true);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isStarted || gameOver) return;

      if (e.key === 'Escape' || e.key.toLowerCase() === 'q') {
        setActiveWorkspace('desktop');
        return;
      }

      if (e.key === 'ArrowUp' && directionRef.current !== 'DOWN') {
        setDirection('UP');
      } else if (e.key === 'ArrowDown' && directionRef.current !== 'UP') {
        setDirection('DOWN');
      } else if (e.key === 'ArrowLeft' && directionRef.current !== 'RIGHT') {
        setDirection('LEFT');
      } else if (e.key === 'ArrowRight' && directionRef.current !== 'LEFT') {
        setDirection('RIGHT');
      } else if (e.key === ' ') {
        setIsPaused((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isStarted, gameOver]);

  useEffect(() => {
    if (!isStarted || isPaused || gameOver) return;

    const gameLoop = setInterval(() => {
      setSnake((prevSnake) => {
        const head = { ...prevSnake[0] };

        switch (directionRef.current) {
          case 'UP': head.y -= 1; break;
          case 'DOWN': head.y += 1; break;
          case 'LEFT': head.x -= 1; break;
          case 'RIGHT': head.x += 1; break;
        }

        // Collision check
        if (
          head.x < 0 || head.x >= GRID_SIZE ||
          head.y < 0 || head.y >= GRID_SIZE ||
          prevSnake.some((seg) => seg.x === head.x && seg.y === head.y)
        ) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [head, ...prevSnake];

        // Eat food
        if (head.x === food.x && head.y === food.y) {
          setScore((s) => {
            const nextScore = s + 10;
            if (nextScore > highScore) setHighScore(nextScore);
            return nextScore;
          });
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, INITIAL_SPEED);

    return () => clearInterval(gameLoop);
  }, [isStarted, isPaused, gameOver, food, highScore]);

  return (
    <div className="w-full h-full overflow-y-auto p-2 sm:p-4 bg-[#020904] text-[#E8FFE8] font-mono select-none flex flex-col items-center justify-start space-y-3">
      {/* Game Bar */}
      <div className="os-panel p-3 border-[#39FF14]/40 glow-green-sm w-full flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-2 text-[#39FF14]">
          <Gamepad2 className="w-5 h-5 animate-pulse" />
          <h1 className="text-sm sm:text-base font-extrabold text-[#E8FFE8]">MATRIX SNAKE ARCADE</h1>
        </div>
        <div className="flex items-center space-x-4 text-xs">
          <div className="text-[#00FF66] font-bold">SCORE: <span className="text-[#39FF14]">{score}</span></div>
          <div className="text-[#70A080]">HIGH: <span className="text-[#39FF14]">{highScore}</span></div>
          <button
            onClick={() => setActiveWorkspace('desktop')}
            className="px-2.5 py-1 bg-[#FF2A55]/15 border border-[#FF2A55] text-[#FF2A55] font-bold rounded flex items-center space-x-1 hover:bg-[#FF2A55] hover:text-[#000] transition-colors cursor-pointer text-[10px]"
            title="Press Esc or Q to Exit"
          >
            <LogOut className="w-3 h-3" />
            <span>EXIT [ESC / Q]</span>
          </button>
        </div>
      </div>

      {/* Grid Canvas Area Maximized */}
      <div className="relative border-2 border-[#39FF14] bg-[#030D06] p-2 rounded shadow-2xl glow-green w-full flex-1 flex justify-center items-center min-h-[360px] overflow-hidden">
        <div
          className="grid gap-0.5 w-full max-w-[620px] aspect-square"
          style={{
            gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`
          }}
        >
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
            const x = index % GRID_SIZE;
            const y = Math.floor(index / GRID_SIZE);
            const isHead = snake[0].x === x && snake[0].y === y;
            const isSnake = snake.some((seg) => seg.x === x && seg.y === y);
            const isFood = food.x === x && food.y === y;

            return (
              <div
                key={index}
                className={`rounded-xs transition-colors duration-75 ${
                  isHead
                    ? 'bg-[#00FF66] glow-green-sm'
                    : isSnake
                    ? 'bg-[#39FF14]/80'
                    : isFood
                    ? 'bg-[#FF2A55] animate-ping'
                    : 'bg-[#0A1C10]/40 border border-[#39FF14]/5'
                }`}
              />
            );
          })}
        </div>

        {/* Start / Pause / Game Over Overlay */}
        {(!isStarted || gameOver || isPaused) && (
          <div className="absolute inset-0 bg-[#020904]/85 backdrop-blur-xs flex flex-col items-center justify-center p-4 text-center space-y-3">
            {!isStarted ? (
              <>
                <h2 className="text-lg font-extrabold text-[#39FF14]">READY TO PLAY SNAKE?</h2>
                <p className="text-xs text-[#70A080]">Use Arrow Keys to Navigate & Space to Pause</p>
                <button
                  onClick={resetGame}
                  className="px-5 py-2.5 bg-[#39FF14] text-[#020904] font-extrabold rounded flex items-center space-x-2 hover:bg-[#00FF66] transition-all cursor-pointer glow-green-sm text-xs"
                >
                  <Play className="w-4 h-4" />
                  <span>START GAME</span>
                </button>
              </>
            ) : gameOver ? (
              <>
                <div className="text-[#FF2A55] font-extrabold text-lg">GAME OVER</div>
                <div className="text-xs text-[#E8FFE8]">Final Score: <span className="text-[#39FF14] font-bold">{score}</span></div>
                <button
                  onClick={resetGame}
                  className="px-5 py-2.5 bg-[#39FF14] text-[#020904] font-extrabold rounded flex items-center space-x-2 hover:bg-[#00FF66] transition-all cursor-pointer glow-green-sm text-xs"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>PLAY AGAIN</span>
                </button>
              </>
            ) : (
              <>
                <div className="text-[#39FF14] font-extrabold text-lg">GAME PAUSED</div>
                <button
                  onClick={() => setIsPaused(false)}
                  className="px-5 py-2.5 bg-[#39FF14] text-[#020904] font-extrabold rounded flex items-center space-x-2 hover:bg-[#00FF66] transition-all cursor-pointer glow-green-sm text-xs"
                >
                  <Play className="w-4 h-4" />
                  <span>RESUME</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* On-screen Touch / Arrow Controls */}
      <div className="flex flex-col items-center space-y-1 sm:hidden pt-2">
        <button
          onClick={() => directionRef.current !== 'DOWN' && setDirection('UP')}
          className="p-3 bg-[#0A1C10] border border-[#39FF14]/40 rounded text-[#39FF14]"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
        <div className="flex space-x-2">
          <button
            onClick={() => directionRef.current !== 'RIGHT' && setDirection('LEFT')}
            className="p-3 bg-[#0A1C10] border border-[#39FF14]/40 rounded text-[#39FF14]"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => directionRef.current !== 'UP' && setDirection('DOWN')}
            className="p-3 bg-[#0A1C10] border border-[#39FF14]/40 rounded text-[#39FF14]"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
          <button
            onClick={() => directionRef.current !== 'LEFT' && setDirection('RIGHT')}
            className="p-3 bg-[#0A1C10] border border-[#39FF14]/40 rounded text-[#39FF14]"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
