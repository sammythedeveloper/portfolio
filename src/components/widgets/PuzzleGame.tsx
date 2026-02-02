"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RotateCcw,
  Trophy,
  Sparkles,
  Play,
  MousePointer2,
  Eye,
  ChevronDown,
  Clock,
  Puzzle,
  X,
} from "lucide-react";

type Difficulty = "easy" | "medium" | "hard";

const DIFFICULTIES = {
  easy: {
    label: "Easy",
    rows: 3,
    cols: 3,
    pieces: 9,
    shuffleMoves: 60,
  },
  medium: {
    label: "Medium",
    rows: 4,
    cols: 4,
    pieces: 16,
    shuffleMoves: 100,
  },
  hard: {
    label: "Hard",
    rows: 5,
    cols: 5,
    pieces: 25,
    shuffleMoves: 220,
  },
} as const;

// Keep ONE image for all difficulties.
const PUZZLE_IMAGE = "/puzzel2.jpg";

export default function PuzzleGame() {
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");

  const [board, setBoard] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [started, setStarted] = useState(false);
  const [won, setWon] = useState(false);

  const [preview, setPreview] = useState(false);
  const [difficultyOpen, setDifficultyOpen] = useState(false);

  const current = DIFFICULTIES[difficulty];

  /*
   * The puzzle image should be displayed using
   * its natural aspect ratio.
   *
   * This prevents the entire puzzle from becoming
   * stretched or squashed.
   */

  /*
   * Solved board.
   */
  const createSolvedBoard = () => {
    return [...Array(current.pieces - 1).keys()].map((i) => i + 1).concat(0);
  };

  /*
   * Create a solvable shuffled puzzle.
   */
  const shuffle = () => {
    let shuffled = createSolvedBoard();
    let previousEmpty = -1;

    for (let i = 0; i < current.shuffleMoves; i++) {
      const empty = shuffled.indexOf(0);

      const emptyRow = Math.floor(empty / current.cols);

      const emptyCol = empty % current.cols;

      const possible: number[] = [];

      for (let index = 0; index < shuffled.length; index++) {
        if (index === previousEmpty) continue;

        const row = Math.floor(index / current.cols);

        const col = index % current.cols;

        if (Math.abs(row - emptyRow) + Math.abs(col - emptyCol) === 1) {
          possible.push(index);
        }
      }

      const random = possible[Math.floor(Math.random() * possible.length)];

      [shuffled[random], shuffled[empty]] = [shuffled[empty], shuffled[random]];

      previousEmpty = empty;
    }

    setBoard(shuffled);
    setMoves(0);
    setSeconds(0);
    setStarted(false);
    setWon(false);
    setPreview(false);
  };

  /*
   * New puzzle when difficulty changes.
   */
  useEffect(() => {
    shuffle();
  }, [difficulty]);

  /*
   * Timer.
   */
  useEffect(() => {
    if (!started || won) return;

    const interval = window.setInterval(() => {
      setSeconds((previous) => previous + 1);
    }, 1000);

    return () => window.clearInterval(interval);
  }, [started, won]);

  /*
   * Check solved state.
   */
  useEffect(() => {
    if (!board.length || moves === 0) return;

    const solved = board.every(
      (value, index) =>
        value === index + 1 || (index === board.length - 1 && value === 0)
    );

    if (solved) {
      setWon(true);
    }
  }, [board, moves]);

  /*
   * Check if a tile can move.
   */
  const canMove = (index: number) => {
    const empty = board.indexOf(0);

    if (empty === -1) return false;

    const row = Math.floor(index / current.cols);

    const col = index % current.cols;

    const emptyRow = Math.floor(empty / current.cols);

    const emptyCol = empty % current.cols;

    return Math.abs(row - emptyRow) + Math.abs(col - emptyCol) === 1;
  };

  /*
   * Move tile.
   */
  const moveTile = (index: number) => {
    if (!canMove(index) || won) return;

    if (!started) {
      setStarted(true);
    }

    const empty = board.indexOf(0);

    const next = [...board];

    next[empty] = board[index];
    next[index] = 0;

    setBoard(next);
    setMoves((previous) => previous + 1);
  };

  /*
   * Timer formatting.
   */
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0");

    const seconds = (totalSeconds % 60).toString().padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  /*
   * Select difficulty.
   */
  const selectDifficulty = (value: Difficulty) => {
    setDifficulty(value);
    setDifficultyOpen(false);
  };

  /*
   * Reward.
   */
  const openReward = () => {
    window.open("https://www.youtube.com/watch?v=SRwDRg5MVSo", "_blank");
  };

  /*
   * Calculate the size of each tile.
   *
   * We use a fixed aspect ratio for the board
   * rather than stretching it to arbitrary dimensions.
   */
  const boardAspectRatio = current.cols / current.rows;

  return (
    <section
      id="terminal-game"
      className="relative w-full overflow-hidden px-4 py-24 sm:px-6 md:py-36"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-co-rich blur-[120px]" />

        <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-co-rich blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-4 py-2">
            <Sparkles size={14} className="text-co-rich" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black">
              Interactive Playground
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Solve the <span className="text-co-rich">puzzle.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/80 sm:leading-relaxed">
            A little interactive challenge for anyone who made it this far.
            Choose your difficulty and put the image back together.
          </p>
        </motion.div>

        {/* 
          GAME AREA

          Mobile:
          Sidebar / controls
          ↓
          Puzzle

          Desktop:
          Puzzle
          Sidebar
        */}
        <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-6 lg:grid lg:grid-cols-[1fr_320px] lg:items-stretch">
          {/* =========================================================
              MOBILE / GAME INFO
          ========================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            viewport={{
              once: true,
            }}
            className="order-1 flex flex-col rounded-[2rem] border border-white/10 bg-charcoal-base p-5 lg:order-2 lg:p-6"
          >
            {/* Challenge */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sub-rich">
                  Challenge
                </span>

                <span className="text-sm font-bold text-co-rich">
                  {difficulty === "easy"
                    ? "01"
                    : difficulty === "medium"
                    ? "02"
                    : "03"}
                </span>
              </div>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  animate={{
                    width:
                      difficulty === "easy"
                        ? "33%"
                        : difficulty === "medium"
                        ? "66%"
                        : "100%",
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="h-full rounded-full bg-co-rich"
                />
              </div>
            </div>

            {/* Difficulty */}
            <div className="relative mt-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-sub-rich">
                Difficulty
              </p>

              <button
                onClick={() => setDifficultyOpen((previous) => !previous)}
                className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left transition-all hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${
                      difficulty === "easy"
                        ? "bg-emerald-400"
                        : difficulty === "medium"
                        ? "bg-yellow-400"
                        : "bg-red-400"
                    }`}
                  />

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {current.label}
                    </p>

                    <p className="mt-0.5 text-xs text-sub-rich">
                      {current.rows} × {current.cols} · {current.pieces} pieces
                    </p>
                  </div>
                </div>

                <ChevronDown
                  size={16}
                  className={`text-sub-rich transition-transform ${
                    difficultyOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {difficultyOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -6,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -6,
                    }}
                    className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-white/10 bg-charcoal-base shadow-2xl"
                  >
                    {(Object.keys(DIFFICULTIES) as Difficulty[]).map((key) => {
                      const option = DIFFICULTIES[key];

                      return (
                        <button
                          key={key}
                          onClick={() => selectDifficulty(key)}
                          className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-white/[0.05] ${
                            difficulty === key ? "bg-white/[0.04]" : ""
                          }`}
                        >
                          <div
                            className={`h-2.5 w-2.5 rounded-full ${
                              key === "easy"
                                ? "bg-emerald-400"
                                : key === "medium"
                                ? "bg-yellow-400"
                                : "bg-red-400"
                            }`}
                          />

                          <div>
                            <p className="text-sm font-semibold text-white">
                              {option.label}
                            </p>

                            <p className="text-xs text-sub-rich">
                              {option.rows} × {option.cols} · {option.pieces}{" "}
                              pieces
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-co-rich" />

                  <p className="text-xs text-sub-rich">Time</p>
                </div>

                <p className="mt-2 text-2xl font-bold tabular-nums text-white">
                  {formatTime(seconds)}
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex items-center gap-2">
                  <MousePointer2 size={14} className="text-co-rich" />

                  <p className="text-xs text-sub-rich">Moves</p>
                </div>

                <p className="mt-2 text-2xl font-bold tabular-nums text-white">
                  {moves}
                </p>
              </div>
            </div>

            {/* Pieces */}
            <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
              <div className="flex items-center gap-2">
                <Puzzle size={15} className="text-co-rich" />

                <span className="text-sm text-sub-rich">Pieces</span>
              </div>

              <span className="text-sm font-semibold text-white">
                {current.pieces}
              </span>
            </div>

            {/* Desktop instructions */}
            <div className="mt-7 hidden lg:block">
              <div className="flex items-center gap-2 text-white">
                <MousePointer2 size={16} className="text-co-rich" />

                <span className="text-sm font-semibold">How to play</span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-sub-rich">
                Click a tile next to the empty space to move it. Arrange every
                piece back into the original image.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-5 flex gap-3 lg:mt-auto lg:flex-col">
              <button
                onClick={() => setPreview(true)}
                disabled={won}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-sub-rich transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Eye size={15} />
                Preview
              </button>

              <button
                onClick={shuffle}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-sub-rich transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                <RotateCcw size={15} />
                Shuffle
              </button>
            </div>
          </motion.div>

          {/* =========================================================
              PUZZLE
          ========================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
            className="order-2 flex min-w-0 items-center justify-center rounded-[2rem] border border-white/10 bg-charcoal-base p-3 shadow-1xl sm:p-5 lg:order-1"
          >
            {/*
              This outer container controls the puzzle's
              actual aspect ratio.

              It does NOT stretch individual tiles.
            */}
            <div
              className="relative w-full max-w-[520px]"
              style={{
                aspectRatio: boardAspectRatio,
              }}
            >
              {/* =====================================================
                  TILE GRID

                  Important:
                  - No rounded tile corners.
                  - No image stretching.
                  - Every tile has its own exact image crop.
              ====================================================== */}
              <div
                className="absolute inset-0 grid gap-[2px] overflow-hidden bg-charcoal-base"
                style={{
                  gridTemplateColumns: `repeat(${current.cols}, minmax(0, 1fr))`,
                  gridTemplateRows: `repeat(${current.rows}, minmax(0, 1fr))`,
                }}
              >
                {board.map((piece, index) => {
                  /*
                   * Empty tile.
                   */
                  if (piece === 0) {
                    return (
                      <div key={`empty-${index}`} className="bg-black/50" />
                    );
                  }

                  const movable = canMove(index) && !won;

                  /*
                   * Original location of the piece.
                   */
                  const original = piece - 1;

                  const originalCol = original % current.cols;

                  const originalRow = Math.floor(original / current.cols);

                  /*
                   * Each tile gets an image that is:
                   *
                   * width  = number of columns
                   * height = number of rows
                   *
                   * and is positioned according to
                   * the tile's original location.
                   *
                   * This keeps the source image intact.
                   */
                  const backgroundPositionX =
                    (originalCol * 100) / (current.cols - 1);

                  const backgroundPositionY =
                    (originalRow * 100) / (current.rows - 1);

                  return (
                    <motion.button
                      key={`${piece}-${index}`}
                      layout
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                      whileHover={
                        movable
                          ? {
                              scale: 0.98,
                            }
                          : {}
                      }
                      whileTap={
                        movable
                          ? {
                              scale: 0.94,
                            }
                          : {}
                      }
                      onClick={() => moveTile(index)}
                      aria-label={`Puzzle tile ${piece}`}
                      className={`
                        relative min-h-0 min-w-0
                        overflow-hidden
                        border-0
                        bg-black
                        p-0
                        outline-none
                        transition-all
                        duration-150
                        ${
                          movable
                            ? "z-10 shadow-[0_0_18px_rgba(255,255,255,0.08)]"
                            : ""
                        }
                      `}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `url(${PUZZLE_IMAGE})`,
                          backgroundSize: `${current.cols * 100}% ${
                            current.rows * 100
                          }%`,
                          backgroundPosition: `${backgroundPositionX}% ${backgroundPositionY}%`,
                          backgroundRepeat: "no-repeat",
                        }}
                      />

                      {movable && (
                        <div className="absolute inset-0 bg-white/[0.04]" />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* =====================================================
                  PREVIEW
              ====================================================== */}
              <AnimatePresence>
                {preview && !won && (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="absolute inset-0 z-50 flex items-center justify-center  bg-black/85 p-4 backdrop-blur-md"
                    onClick={() => setPreview(false)}
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.94,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.94,
                      }}
                      className="relative max-h-full max-w-full overflow-hidden rounded-xl border border-white/10 bg-black shadow-4xl"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <img
                        src={PUZZLE_IMAGE}
                        alt="Complete puzzle preview"
                        className="block max-h-[80vh] max-w-full object-contain"
                      />

                      <button
                        onClick={() => setPreview(false)}
                        aria-label="Close preview"
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur-md transition-colors hover:bg-co-rich hover:text-black"
                      >
                        <X size={16} />
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* =====================================================
                  WIN
              ====================================================== */}
              <AnimatePresence>
                {won && (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    className="absolute inset-0 z-40 flex items-center justify-center bg-black/80 p-6 backdrop-blur-md"
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
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                      className="text-center"
                    >
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-co-rich text-black shadow-lg shadow-co-rich/20">
                        <Trophy size={30} />
                      </div>

                      <h3 className="mt-5 text-2xl font-bold text-white">
                        You solved it.
                      </h3>

                      <p className="mt-2 text-sm text-sub-rich">
                        {current.label} · {moves} moves · {formatTime(seconds)}
                      </p>

                      <div className="mt-6 flex flex-wrap justify-center gap-3">
                        <button
                          onClick={shuffle}
                          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                        >
                          <RotateCcw size={15} />
                          Play Again
                        </button>

                        <button
                          onClick={openReward}
                          className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
                        >
                          <Play size={15} />
                          Unlock Reward
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
