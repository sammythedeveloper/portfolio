"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RotateCcw,
  Trophy,
  Sparkles,
  ArrowRight,
  Play,
  MousePointer2,
} from "lucide-react";

const LEVELS = [
  {
    id: 1,
    rows: 3,
    cols: 4,
    image: "/puzzel1.jpg",
  },
  {
    id: 2,
    rows: 4,
    cols: 4,
    image: "/puzzel2.jpg",
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

    return (
      Math.abs(row - emptyRow) + Math.abs(col - emptyCol) === 1
    );
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

        if (
          Math.abs(row - emptyRow) +
            Math.abs(col - emptyCol) ===
          1
        ) {
          possible.push(j);
        }
      }

      const random =
        possible[Math.floor(Math.random() * possible.length)];

      [shuffled[random], shuffled[empty]] = [
        shuffled[empty],
        shuffled[random],
      ];
    }

    setBoard(shuffled);
    setMoves(0);
    setWon(false);
  };

  useEffect(() => {
    const solved = board.every(
      (value, index) =>
        value === index + 1 ||
        (index === board.length - 1 && value === 0)
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
    window.open(
      "https://www.youtube.com/watch?v=SRwDRg5MVSo",
      "_blank"
    );
  };

  return (
    <section
      id="terminal-game"
      className="relative w-full overflow-hidden py-28 md:py-36 px-6"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-co-rich/5 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
            <Sparkles
              size={14}
              className="text-co-rich"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sub-rich">
              Interactive Playground
            </span>
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Solve the{" "}
            <span className="text-co-rich">
              puzzle.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sub-rich leading-relaxed">
            A little interactive challenge for anyone who made it
            this far. Put the pieces together and see what happens.
          </p>
        </motion.div>

        {/* Game Layout */}
        <div className="mt-14 grid lg:grid-cols-[1fr_320px] gap-6 max-w-5xl mx-auto items-stretch">
          {/* Puzzle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="
              relative
              rounded-[2rem]
              border border-white/10
              bg-charcoal-base
              p-3 sm:p-4
              shadow-2xl
            "
          >
            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{
                aspectRatio: `${current.cols}/${current.rows}`,
              }}
            >
              <div
                className="grid w-full h-full gap-1.5"
                style={{
                  gridTemplateColumns: `repeat(${current.cols}, minmax(0, 1fr))`,
                }}
              >
                {board.map((piece, index) => {
                  if (piece === 0) {
                    return (
                      <div
                        key={index}
                        className="rounded-xl bg-black/20 border border-white/[0.03]"
                      />
                    );
                  }

                  const movable = canMove(index) && !won;

                  const original = piece - 1;

                  const pieceX =
                    original % current.cols;

                  const pieceY = Math.floor(
                    original / current.cols
                  );

                  const x =
                    (pieceX * 100) /
                    (current.cols - 1);

                  const y =
                    (pieceY * 100) /
                    (current.rows - 1);

                  return (
                    <motion.button
                      key={`${piece}-${index}`}
                      layout
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 28,
                      }}
                      whileHover={
                        movable
                          ? {
                              scale: 0.97,
                            }
                          : {}
                      }
                      whileTap={
                        movable
                          ? {
                              scale: 0.93,
                            }
                          : {}
                      }
                      onClick={() =>
                        moveTile(index)
                      }
                      className={`
                        relative
                        overflow-hidden
                        rounded-xl
                        border
                        transition-all
                        duration-200
                        ${
                          movable
                            ? "border-co-rich/60 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                            : "border-white/5"
                        }
                      `}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `url(${current.image})`,
                          backgroundSize: `${current.cols * 100}% ${
                            current.rows * 100
                          }%`,
                          backgroundPosition: `${x}% ${y}%`,
                          backgroundRepeat: "no-repeat",
                        }}
                      />

                      {movable && (
                        <div className="absolute inset-0 bg-white/5" />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Win State */}
              <AnimatePresence>
                {won && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/75
                      backdrop-blur-md
                    "
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                        scale: 0.95,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      className="text-center"
                    >
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-co-rich text-black shadow-lg">
                        <Trophy size={30} />
                      </div>

                      <h3 className="mt-5 text-2xl font-bold text-white">
                        {level === 0
                          ? "Nice work."
                          : "You solved it."}
                      </h3>

                      <p className="mt-2 text-sm text-sub-rich">
                        Completed in {moves} moves
                      </p>

                      <button
                        onClick={
                          level === 0
                            ? nextLevel
                            : openReward
                        }
                        className="
                          mt-6
                          inline-flex
                          items-center
                          gap-2
                          rounded-xl
                          bg-white
                          px-5
                          py-3
                          text-sm
                          font-semibold
                          text-black
                          transition-transform
                          hover:scale-105
                        "
                      >
                        {level === 0 ? (
                          <>
                            Next Challenge
                            <ArrowRight size={16} />
                          </>
                        ) : (
                          <>
                            <Play size={15} />
                            Unlock Reward
                          </>
                        )}
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="
              flex
              flex-col
              rounded-[2rem]
              border border-white/10
              bg-charcoal-base
              p-6
            "
          >
            {/* Level */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sub-rich">
                  Challenge
                </span>

                <span className="text-sm font-bold text-co-rich">
                  0{level + 1}
                </span>
              </div>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  animate={{
                    width: level === 0 ? "50%" : "100%",
                  }}
                  className="h-full rounded-full bg-co-rich"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <p className="text-xs text-sub-rich">
                  Pieces
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  {totalPieces}
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <p className="text-xs text-sub-rich">
                  Moves
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  {moves}
                </p>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8">
              <div className="flex items-center gap-2 text-white">
                <MousePointer2
                  size={16}
                  className="text-co-rich"
                />

                <span className="text-sm font-semibold">
                  How to play
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-sub-rich">
                Click a tile next to the empty space to move it.
                Arrange every piece back into the original image.
              </p>
            </div>

            {/* Reset */}
            <button
              onClick={shuffle}
              className="
                mt-auto
                pt-8
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                px-4
                py-3
                text-sm
                font-semibold
                text-sub-rich
                transition-all
                hover:border-white/20
                hover:bg-white/[0.06]
                hover:text-white
              "
            >
              <RotateCcw size={15} />
              Shuffle Puzzle
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}