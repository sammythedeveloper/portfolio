"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Award, Sparkles, HelpCircle } from "lucide-react";

// A 3x3 puzzle grid (8 numbered tiles, 1 empty tile represented by 0)
const WINNING_BOARD = [1, 2, 3, 4, 5, 6, 7, 8, 0];

export default function PuzzleGame() {
  const [board, setBoard] = useState<number[]>(WINNING_BOARD);
  const [isWon, setIsWon] = useState(false);
  const [moves, setMoves] = useState(0);

  // Helper function to check if a tile can move to the empty space (0)
  const canMove = (index: number) => {
    const emptyIndex = board.indexOf(0);
    const row = Math.floor(index / 3);
    const col = index % 3;
    const emptyRow = Math.floor(emptyIndex / 3);
    const emptyCol = emptyIndex % 3;

    // A tile can move if it's directly next to, above, or below the empty tile
    return Math.abs(row - emptyRow) + Math.abs(col - emptyCol) === 1;
  };

  // Move tile action handler
  const handleTileClick = (index: number) => {
    if (isWon || !canMove(index)) return;

    const emptyIndex = board.indexOf(0);
    const newBoard = [...board];

    // Swap the clicked tile with the empty space
    newBoard[emptyIndex] = board[index];
    newBoard[index] = 0;

    setBoard(newBoard);
    setMoves((prev) => prev + 1);
  };

  // Check for win condition
  useEffect(() => {
    if (moves > 0 && board.every((val, i) => val === WINNING_BOARD[i])) {
      setIsWon(true);
    }
  }, [board, moves]);

  // Shuffle board function (Makes sure the generated board is actually solvable)
  const shuffleBoard = () => {
    let currentBoard = [...WINNING_BOARD];
    let shuffleMoves = 0;

    while (shuffleMoves < 40) {
      const emptyIndex = currentBoard.indexOf(0);
      const validIndices: number[] = [];

      // Find all movable neighbor tiles around the empty slot
      for (let i = 0; i < 9; i++) {
        const row = Math.floor(i / 3);
        const col = i % 3;
        const emptyRow = Math.floor(emptyIndex / 3);
        const emptyCol = emptyIndex % 3;
        if (Math.abs(row - emptyRow) + Math.abs(col - emptyCol) === 1) {
          validIndices.push(i);
        }
      }

      // Pick a random movable tile and swap it
      const randomIndex =
        validIndices[Math.floor(Math.random() * validIndices.length)];
      currentBoard[emptyIndex] = currentBoard[randomIndex];
      currentBoard[randomIndex] = 0;
      shuffleMoves++;
    }

    setBoard(currentBoard);
    setIsWon(false);
    setMoves(0);
  };

  // Auto-shuffle on component initial mount
  useEffect(() => {
    shuffleBoard();
  }, []);

  return (
    <section id="terminal-game" className="w-full px-6 py-32 bg-transparent">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Header Title Info */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white tracking-tight flex items-center justify-center gap-3">
            Take a Break <HelpCircle className="text-co-rich w-8 h-8" />
          </h2>
          <p className="mt-3 text-sub-rich max-w-md">
            Slide the mixed tiles into sequential order ($1 \rightarrow 8$) to
            clear the empty space at the bottom right.
          </p>
        </div>

        {/* Dashboard Status Controls Panel */}
        <div className="w-full max-w-[340px] flex items-center justify-between mb-6 px-2 text-sm font-mono text-sub-rich">
          <div className="flex items-center gap-1">
            <span>Moves:</span>
            <span className="text-white font-bold">{moves}</span>
          </div>
          <button
            onClick={shuffleBoard}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] text-white hover:text-co-rich transition-all duration-200"
          >
            <RotateCcw size={14} />
            <span>Reset</span>
          </button>
        </div>

        {/* The Game Matrix Board wrapper */}
        <div className="relative p-4 rounded-3xl bg-charcoal-base border border-white/10 shadow-2xl overflow-hidden w-full max-w-[340px] aspect-square flex flex-col justify-center">
          <div className="grid grid-cols-3 gap-3 h-full">
            {board.map((tile, index) => {
              const isMovable = canMove(index) && !isWon;
              return (
                <motion.button
                  key={`tile-${tile}-${index}`}
                  layout
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={() => handleTileClick(index)}
                  disabled={tile === 0 || isWon}
                  className={`
                    w-full h-full rounded-2xl flex items-center justify-center font-mono text-2xl font-bold transition-all duration-200
                    ${tile === 0 ? "opacity-0 pointer-events-none" : ""}
                    ${
                      isMovable
                        ? "bg-white/[0.03] border border-white/10 text-white cursor-pointer hover:border-co-rich/40 hover:bg-white/[0.06]"
                        : "bg-white/[0.01] border border-white/5 text-sub-rich/40 cursor-not-allowed"
                    }
                  `}
                >
                  {tile !== 0 && tile}
                </motion.button>
              );
            })}
          </div>

          {/* Smooth overlay triggered on state success resolution */}
          <AnimatePresence>
            {isWon && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center"
              >
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.1, type: "spring" }}
                  className="flex flex-col items-center"
                >
                  <div className="p-4 bg-co-rich/10 text-co-rich border border-co-rich/20 rounded-full mb-4 animate-bounce">
                    <Award size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    Puzzle Solved!{" "}
                    <Sparkles size={20} className="text-co-rich" />
                  </h3>
                  <p className="mt-2 text-sm text-sub-rich/80 max-w-[240px] leading-relaxed">
                    Excellent problem-solving logic. Let's apply that to your
                    product pipeline!
                  </p>

                  <a
                    href="#contact"
                    className="mt-6 px-5 py-2.5 bg-white text-black text-xs font-bold font-mono uppercase tracking-wider rounded-xl transition-transform active:scale-95 hover:bg-white/90"
                  >
                    Hire Samson
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
