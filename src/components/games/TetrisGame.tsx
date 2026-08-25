"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Gamepad2, RotateCcw, Play, ArrowLeft, ArrowRight, ArrowDown, RotateCw, LogOut } from 'lucide-react';
import { useOSStore } from '@/store/useOSStore';

const COLS = 10;
const ROWS = 20;

const TETROMINOS = {
  I: { shape: [[1, 1, 1, 1]], color: 'bg-[#39FF14]' },
  J: { shape: [[1, 0, 0], [1, 1, 1]], color: 'bg-[#00FF66]' },
  L: { shape: [[0, 0, 1], [1, 1, 1]], color: 'bg-[#44E8FF]' },
  O: { shape: [[1, 1], [1, 1]], color: 'bg-[#39FF14]' },
  S: { shape: [[0, 1, 1], [1, 1, 0]], color: 'bg-[#00FF66]' },
  T: { shape: [[0, 1, 0], [1, 1, 1]], color: 'bg-[#A66CFF]' },
  Z: { shape: [[1, 1, 0], [0, 1, 1]], color: 'bg-[#FF2A55]' },
};

type TetrominoKey = keyof typeof TETROMINOS;

export const TetrisGame: React.FC = () => {
  const { setActiveWorkspace } = useOSStore();
  const [board, setBoard] = useState<string[][]>(
    Array.from({ length: ROWS }, () => Array(COLS).fill(''))
  );
  const [currentPiece, setCurrentPiece] = useState<{
    shape: number[][];
    color: string;
    x: number;
    y: number;
  } | null>(null);

  const [score, setScore] = useState(0);
  const [lines, setLines] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const spawnPiece = () => {
    const keys = Object.keys(TETROMINOS) as TetrominoKey[];
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    const tetro = TETROMINOS[randKey];
    return {
      shape: tetro.shape,
      color: tetro.color,
      x: Math.floor((COLS - tetro.shape[0].length) / 2),
      y: 0,
    };
  };

  const checkCollision = (
    shape: number[][],
    offsetX: number,
    offsetY: number,
    currentBoard: string[][]
  ) => {
    for (let r = 0; r < shape.length; r++) {
      for (let c = 0; c < shape[r].length; c++) {
        if (shape[r][c]) {
          const newX = offsetX + c;
          const newY = offsetY + r;
          if (
            newX < 0 ||
            newX >= COLS ||
            newY >= ROWS ||
            (newY >= 0 && currentBoard[newY][newX])
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };

  const resetGame = () => {
    const emptyBoard = Array.from({ length: ROWS }, () => Array(COLS).fill(''));
    setBoard(emptyBoard);
    setScore(0);
    setLines(0);
    setGameOver(false);
    setIsStarted(true);
    setCurrentPiece(spawnPiece());
  };

  const rotate = (matrix: number[][]) => {
    return matrix[0].map((_, index) => matrix.map((row) => row[index]).reverse());
  };

  const moveLeft = () => {
    if (!currentPiece || gameOver) return;
    if (!checkCollision(currentPiece.shape, currentPiece.x - 1, currentPiece.y, board)) {
      setCurrentPiece({ ...currentPiece, x: currentPiece.x - 1 });
    }
  };

  const moveRight = () => {
    if (!currentPiece || gameOver) return;
    if (!checkCollision(currentPiece.shape, currentPiece.x + 1, currentPiece.y, board)) {
      setCurrentPiece({ ...currentPiece, x: currentPiece.x + 1 });
    }
  };

  const rotatePiece = () => {
    if (!currentPiece || gameOver) return;
    const rotated = rotate(currentPiece.shape);
    if (!checkCollision(rotated, currentPiece.x, currentPiece.y, board)) {
      setCurrentPiece({ ...currentPiece, shape: rotated });
    }
  };

  const dropPiece = () => {
    if (!currentPiece || gameOver) return;

    if (!checkCollision(currentPiece.shape, currentPiece.x, currentPiece.y + 1, board)) {
      setCurrentPiece((prev) => (prev ? { ...prev, y: prev.y + 1 } : null));
    } else {
      // Lock piece into board
      const newBoard = board.map((row) => [...row]);
      for (let r = 0; r < currentPiece.shape.length; r++) {
        for (let c = 0; c < currentPiece.shape[r].length; c++) {
          if (currentPiece.shape[r][c]) {
            const boardY = currentPiece.y + r;
            const boardX = currentPiece.x + c;
            if (boardY < 0) {
              setGameOver(true);
              return;
            }
            newBoard[boardY][boardX] = currentPiece.color;
          }
        }
      }

      // Check for line clears
      let cleared = 0;
      const filteredBoard = newBoard.filter((row) => {
        const isFull = row.every((cell) => cell !== '');
        if (isFull) cleared++;
        return !isFull;
      });

      while (filteredBoard.length < ROWS) {
        filteredBoard.unshift(Array(COLS).fill(''));
      }

      if (cleared > 0) {
        setLines((l) => l + cleared);
        setScore((s) => s + cleared * 100);
      }

      setBoard(filteredBoard);

      const nextPiece = spawnPiece();
      if (checkCollision(nextPiece.shape, nextPiece.x, nextPiece.y, filteredBoard)) {
        setGameOver(true);
      } else {
        setCurrentPiece(nextPiece);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key.toLowerCase() === 'q') {
        setActiveWorkspace('desktop');
        return;
      }
      if (!isStarted || gameOver) return;
      if (e.key === 'ArrowLeft') moveLeft();
      else if (e.key === 'ArrowRight') moveRight();
      else if (e.key === 'ArrowDown') dropPiece();
      else if (e.key === 'ArrowUp') rotatePiece();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isStarted, gameOver, currentPiece, board]);

  useEffect(() => {
    if (!isStarted || gameOver) return;
    const interval = setInterval(() => {
      dropPiece();
    }, 500);
    return () => clearInterval(interval);
  }, [isStarted, gameOver, currentPiece, board]);

  // Combine board and current falling piece for rendering
  const renderBoard = board.map((row) => [...row]);
  if (currentPiece) {
    for (let r = 0; r < currentPiece.shape.length; r++) {
      for (let c = 0; c < currentPiece.shape[r].length; c++) {
        if (currentPiece.shape[r][c]) {
          const y = currentPiece.y + r;
          const x = currentPiece.x + c;
          if (y >= 0 && y < ROWS && x >= 0 && x < COLS) {
            renderBoard[y][x] = currentPiece.color;
          }
        }
      }
    }
  }

  return (
    <div className="w-full h-full overflow-y-auto p-4 sm:p-6 bg-[#020904] text-[#E8FFE8] font-mono select-none flex flex-col items-center justify-center space-y-4">
      {/* Header Bar */}
      <div className="os-panel p-4 border-[#39FF14]/40 glow-green-sm w-full max-w-md flex items-center justify-between">
        <div className="flex items-center space-x-2 text-[#39FF14]">
          <Gamepad2 className="w-5 h-5 animate-pulse" />
          <h1 className="text-base font-extrabold text-[#E8FFE8]">MATRIX TETRIS ARCADE</h1>
        </div>
        <div className="text-xs flex items-center space-x-3">
          <div className="space-y-0.5 text-right">
            <div className="text-[#00FF66] font-bold">SCORE: <span className="text-[#39FF14]">{score}</span></div>
            <div className="text-[#70A080]">LINES: <span className="text-[#39FF14]">{lines}</span></div>
          </div>
          <button
            onClick={() => setActiveWorkspace('desktop')}
            className="px-2 py-1 bg-[#FF2A55]/15 border border-[#FF2A55] text-[#FF2A55] font-bold rounded flex items-center space-x-1 hover:bg-[#FF2A55] hover:text-[#000] transition-colors cursor-pointer text-[10px]"
            title="Press Esc or Q to Exit"
          >
            <LogOut className="w-3 h-3" />
            <span>EXIT [ESC / Q]</span>
          </button>
        </div>
      </div>

      {/* Tetris Board Grid */}
      <div className="relative border-2 border-[#39FF14] bg-[#030D06] p-2 sm:p-3 rounded shadow-2xl glow-green w-full max-w-md flex justify-center">
        <div
          className="grid gap-0.5 w-full max-w-[320px] h-[520px]"
          style={{
            gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`
          }}
        >
          {renderBoard.flatMap((row, rIdx) =>
            row.map((cellColor, cIdx) => (
              <div
                key={`${rIdx}-${cIdx}`}
                className={`rounded-xs transition-colors duration-75 ${
                  cellColor || 'bg-[#0A1C10]/40 border border-[#39FF14]/5'
                }`}
              />
            ))
          )}
        </div>

        {/* Start / Game Over Overlay */}
        {(!isStarted || gameOver) && (
          <div className="absolute inset-0 bg-[#020904]/85 backdrop-blur-xs flex flex-col items-center justify-center p-4 text-center space-y-3">
            {!isStarted ? (
              <>
                <h2 className="text-base font-extrabold text-[#39FF14]">READY FOR TETRIS?</h2>
                <p className="text-[11px] text-[#70A080]">Arrows: Move & Rotate | Down: Soft Drop</p>
                <button
                  onClick={resetGame}
                  className="px-5 py-2.5 bg-[#39FF14] text-[#020904] font-extrabold rounded flex items-center space-x-2 hover:bg-[#00FF66] transition-all cursor-pointer glow-green-sm text-xs"
                >
                  <Play className="w-4 h-4" />
                  <span>START GAME</span>
                </button>
              </>
            ) : (
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
            )}
          </div>
        )}
      </div>

      {/* On-screen Controls */}
      <div className="flex items-center space-x-2">
        <button onClick={moveLeft} className="p-2.5 bg-[#0A1C10] border border-[#39FF14]/40 rounded text-[#39FF14]">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button onClick={rotatePiece} className="p-2.5 bg-[#0A1C10] border border-[#39FF14]/40 rounded text-[#39FF14]">
          <RotateCw className="w-4 h-4" />
        </button>
        <button onClick={dropPiece} className="p-2.5 bg-[#0A1C10] border border-[#39FF14]/40 rounded text-[#39FF14]">
          <ArrowDown className="w-4 h-4" />
        </button>
        <button onClick={moveRight} className="p-2.5 bg-[#0A1C10] border border-[#39FF14]/40 rounded text-[#39FF14]">
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
