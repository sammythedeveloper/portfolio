"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Award, Sparkles, Play } from "lucide-react";

const LEVELS = [
  {
    id: 1,
    rows: 3,
    cols: 4,
    image: "/projects/puzzel1.jpg",
  },
  {
    id: 2,
    rows: 4,
    cols: 4,
    image: "/projects/puzzel2.jpg",
  },
];

export default function PuzzleGame() {
  const [level, setLevel] = useState(0);

  const current = LEVELS[level];

  const totalPieces = current.rows * current.cols;

  const createSolvedBoard = () => {
    return [...Array(totalPieces - 1).keys()].map((i) => i + 1).concat(0);
  };

  const [board, setBoard] = useState<number[]>(createSolvedBoard());

  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);

  const canMove = (index: number) => {
    const empty = board.indexOf(0);

    const row = Math.floor(index / current.cols);
    const col = index % current.cols;

    const emptyRow = Math.floor(empty / current.cols);
    const emptyCol = empty % current.cols;

    return Math.abs(row - emptyRow) + Math.abs(col - emptyCol) === 1;
  };

  const moveTile = (index: number) => {
    if (!canMove(index) || won) return;

    const empty = board.indexOf(0);

    const next = [...board];

    next[empty] = board[index];
    next[index] = 0;

    setBoard(next);
    setMoves((prev) => prev + 1);
  };

  const shuffle = () => {
    let shuffled = createSolvedBoard();

    const amount = level === 0 ? 80 : 120;

    for (let i = 0; i < amount; i++) {
      const empty = shuffled.indexOf(0);

      const possible: number[] = [];

      for (let j = 0; j < shuffled.length; j++) {
        const row = Math.floor(j / current.cols);
        const col = j % current.cols;

        const emptyRow = Math.floor(empty / current.cols);

        const emptyCol = empty % current.cols;

        if (Math.abs(row - emptyRow) + Math.abs(col - emptyCol) === 1) {
          possible.push(j);
        }
      }

      const random = possible[Math.floor(Math.random() * possible.length)];

      [shuffled[random], shuffled[empty]] = [shuffled[empty], shuffled[random]];
    }

    setBoard(shuffled);
    setMoves(0);
    setWon(false);
  };

  useEffect(() => {
    const solved = board.every(
      (value, index) =>
        value === index + 1 || (index === board.length - 1 && value === 0)
    );

    if (solved && moves > 0) {
      setWon(true);
    }
  }, [board, moves]);

  useEffect(() => {
    shuffle();
  }, [level]);

  const nextLevel = () => {
    setLevel(1);
  };

  const openReward = () => {
    window.open("https://www.youtube.com/watch?v=SRwDRg5MVSo", "_blank");
  };

  return (
    <section id="terminal-game" className="w-full px-6 py-32">
      <div
        className="
max-w-4xl
mx-auto
flex
flex-col
items-center
"
      >
        <div className="text-center mb-10">
          <h2
            className="
text-4xl
font-bold
text-white
flex
items-center
justify-center
gap-3
"
          >
            Puzzle Challenge
            <Sparkles className="text-co-rich" />
          </h2>

          <p className="mt-3 text-sub-rich font-mono">
            Level {level + 1}
            {" • "}
            {totalPieces} Pieces
          </p>
        </div>

        <div
          className="
w-full
max-w-[500px]
flex
justify-between
items-center
mb-5
text-sm
font-mono
text-sub-rich
"
        >
          <span>
            Moves:
            <b className="text-white ml-2">{moves}</b>
          </span>

          <button
            onClick={shuffle}
            className="
flex
items-center
gap-2
px-4
py-2
rounded-xl
border
border-white/10
bg-white/5
text-white
hover:bg-white/10
transition
"
          >
            <RotateCcw size={15} />
            Reset
          </button>
        </div>

        <div
          className="
relative
w-full
max-w-[500px]
p-3
rounded-3xl
bg-charcoal-base
border
border-white/10
shadow-2xl
"
          style={{
            aspectRatio: `${current.cols}/${current.rows}`,
          }}
        >
          <div
            className="
grid
gap-1
w-full
h-full
"
            style={{
              gridTemplateColumns: `repeat(${current.cols}, minmax(0,1fr))`,
            }}
          >
            {board.map((piece, index) => {
              if (piece === 0) {
                return <div key={index} />;
              }

              const movable = canMove(index) && !won;

              const original = piece - 1;

              const pieceX = original % current.cols;

              const pieceY = Math.floor(original / current.cols);

              const x = (pieceX * 100) / (current.cols - 1);

              const y = (pieceY * 100) / (current.rows - 1);

              return (
                <motion.button
                  key={`${piece}-${index}`}
                  layout
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  onClick={() => moveTile(index)}
                  className={`
overflow-hidden
rounded-lg
border
aspect-square

${movable ? "border-co-rich/50" : "border-white/10"}

`}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${current.image})`,
                      backgroundSize: `${current.cols * 100}% ${
                        current.rows * 100
                      }%`,
                      backgroundPosition: `${x}% ${y}%`,
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence>
            {won && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="
absolute
inset-0
rounded-3xl
bg-black/90
backdrop-blur-md
flex
items-center
justify-center
"
              >
                <div className="text-center p-6">
                  <div
                    className="
mx-auto
mb-5
w-fit
p-4
rounded-full
bg-co-rich/10
text-co-rich
"
                  >
                    <Award size={40} />
                  </div>

                  <h3
                    className="
text-3xl
font-bold
text-white
"
                  >
                    {level === 0 ? "Level Complete 🎉" : "Secret Unlocked 🏆"}
                  </h3>

                  <p
                    className="
mt-3
text-sub-rich
"
                  >
                    {level === 0
                      ? "Ready for the final puzzle?"
                      : "Enjoy my youtube video."}
                  </p>

                  <button
                    onClick={level === 0 ? nextLevel : openReward}
                    className="
mt-7
px-6
py-3
rounded-xl
bg-white
text-black
font-bold
flex
items-center
gap-2
mx-auto
"
                  >
                    {level === 0 ? (
                      "Level 2 →"
                    ) : (
                      <>
                        <Play size={16} />
                        Watch Video
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
