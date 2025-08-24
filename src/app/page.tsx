"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Header from '../components/Header';
import TypingArea from '../components/TypingArea';
import Stats from '../components/Stats';
import { RefreshIcon } from '../components/Icons';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { wordLists } from '../constants/words';

// --- Helper Function ---
const generateWords = (count: number, list: string[]): string => {
  const shuffled = [...list].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).join(' ');
};

export default function Home() {
  const [testMode, setTestMode] = useState<'time' | 'words'>('words');
  const [timeDuration, setTimeDuration] = useState<number>(30);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [wordCount, setWordCount] = useState<number>(25);
  const [wordListKey, setWordListKey] = useState<string>('english100');
  const [text, setText] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(100);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const totalTypedChars = useRef<number>(0);
  const correctTypedChars = useRef<number>(0);
  const refreshButtonRef = useRef<HTMLButtonElement>(null);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetTest = useCallback(() => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    
    const currentWordList = wordLists[wordListKey];
    const wordsToGenerate = testMode === 'time' ? 300 : wordCount;
    setText(generateWords(wordsToGenerate, currentWordList));
    
    setUserInput(''); setStartTime(null); setWpm(0); setAccuracy(100); setIsFinished(false);
    setTimeLeft(timeDuration);
    totalTypedChars.current = 0; correctTypedChars.current = 0;

    if (refreshButtonRef.current) {
      refreshButtonRef.current.blur();
    }
  }, [wordCount, wordListKey, testMode, timeDuration]);

  useEffect(() => { resetTest(); }, [resetTest]);

  // Timer countdown logic
  useEffect(() => {
    if (startTime && testMode === 'time' && !isFinished) {
      timerIntervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
            setIsFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [startTime, testMode, isFinished]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFinished) return;
      if (!startTime) setStartTime(Date.now());
      if (e.key === 'Backspace') setUserInput((prev) => prev.slice(0, -1));
      else if (e.key.length === 1 && userInput.length < text.length) {
        setUserInput((prev) => prev + e.key);
        totalTypedChars.current++;
        if (e.key === text[userInput.length]) correctTypedChars.current++;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [userInput, text, startTime, isFinished]);

  useEffect(() => {
    if (startTime && !isFinished) {
      const elapsedTime = (Date.now() - startTime) / 60000;
      if (elapsedTime > 0) {
        setWpm(Math.round((userInput.length / 5) / elapsedTime));
        setAccuracy(Math.round(totalTypedChars.current > 0 ? (correctTypedChars.current / totalTypedChars.current) * 100 : 100));
      }
    }
    if (testMode === 'words' && userInput.length === text.length && text.length > 0) {
      setIsFinished(true);
    }
  }, [userInput, startTime, text, isFinished, testMode]);

  useEffect(() => {
    if (isFinished && refreshButtonRef.current) {
      refreshButtonRef.current.focus();
    }
  }, [isFinished]);

  return (
    <div className="bg-background min-h-screen flex flex-col text-sub p-4 relative">
      <ThemeSwitcher />
      <Header 
        testMode={testMode}
        setTestMode={setTestMode}
        setWordCount={setWordCount} 
        activeWordCount={wordCount}
        setTimeDuration={setTimeDuration}
        activeTimeDuration={timeDuration}
        setWordListKey={setWordListKey}
        activeWordListKey={wordListKey}
      />
      <main className="w-full max-w-4xl mx-auto flex-grow flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          {testMode === 'time' && !isFinished && (
            <div className="text-main text-2xl font-mono mb-4">{timeLeft}</div>
          )}
          {isFinished ? (
            <div className="text-center">
              <h2 className="text-3xl text-main mb-4">Test Complete!</h2>
              <Stats wpm={wpm} accuracy={accuracy} />
            </div>
          ) : ( <TypingArea text={text} userInput={userInput} /> )}
          <button 
            ref={refreshButtonRef}
            onClick={resetTest} 
            className="mt-8 text-sub hover:text-main transition-colors duration-200"
          >
            <RefreshIcon />
          </button>
        </div>
      </main>
      <footer className="w-full text-center p-4 text-sub text-sm">
        <p>Inspired by Monkeytype</p>
      </footer>
    </div>
  );
}
