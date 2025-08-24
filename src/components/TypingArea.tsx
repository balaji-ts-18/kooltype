import { FC, useRef, useEffect, useState } from 'react';

// --- Type Definitions ---
interface TypingAreaProps {
  text: string;
  userInput: string;
}

// --- Component ---
const TypingArea: FC<TypingAreaProps> = ({ text, userInput }) => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const words = text.split(' ');

  // Reset scroll and refs array when the text changes
  useEffect(() => {
    setScrollOffset(0);
    wordRefs.current = wordRefs.current.slice(0, words.length);
  }, [text]);

  useEffect(() => {
    const currentWordIndex = userInput.split(' ').length - 1;
    const currentWordRef = wordRefs.current[currentWordIndex];
    const container = containerRef.current;

    if (currentWordRef && container) {
      const containerRect = container.getBoundingClientRect();
      const wordRect = currentWordRef.getBoundingClientRect();
      
      // Use the height of the word itself as the dynamic line height
      const lineHeight = wordRect.height; 

      // Check if the top of the current word is on the third line.
      // We check if its top position is greater than the container's top + 1.5 lines.
      if (wordRect.top > containerRect.top + (lineHeight * 1.5)) {
        // Scroll up by one line height
        setScrollOffset(prev => prev - lineHeight);
      }
    }
  }, [userInput]);

  let charIndex = 0;

  return (
    // We use a calculated height to ensure it's exactly 3 lines high.
    // leading-relaxed = 1.625 line-height. text-2xl = 1.5rem font-size.
    // 1.5 * 1.625 = 2.4375rem per line. 3 lines = 7.3125rem.
    <div ref={containerRef} className="h-[7.3125rem] overflow-hidden text-2xl md:text-3xl font-mono tracking-wider leading-relaxed text-center">
      <div className="transition-transform duration-200 ease-in-out" style={{ transform: `translateY(${scrollOffset}px)` }}>
        {words.map((word, wordIdx) => (
          <span
            key={wordIdx}
            ref={(el) => { wordRefs.current[wordIdx] = el; }}
            className="inline-block mr-[0.5em]"
          >
            {word.split('').map((char, charIdx) => {
              const currentIndex = charIndex;
              charIndex++;

              let state: 'correct' | 'incorrect' | 'default' = 'default';
              if (currentIndex < userInput.length) {
                state = char === userInput[currentIndex] ? 'correct' : 'incorrect';
              }
              const isCursor = currentIndex === userInput.length;

              return (
                <span key={charIdx} className={`${state === 'correct' ? 'text-text' : state === 'incorrect' ? 'text-error' : 'text-sub'} ${isCursor ? 'animate-cursor-blink border-l-2 border-caret' : ''}`}>
                  {char}
                </span>
              );
            })}
            {(() => {
                const currentIndex = charIndex;
                charIndex++;

                if (wordIdx < words.length - 1) {
                  let state: 'correct' | 'incorrect' | 'default' = 'default';
                  if (currentIndex < userInput.length) {
                      state = userInput[currentIndex] === ' ' ? 'correct' : 'incorrect';
                  }
                  const isCursor = currentIndex === userInput.length;
                  
                  return (
                      <span className={`${state === 'incorrect' ? 'bg-extra-error' : ''} ${isCursor ? 'animate-cursor-blink border-l-2 border-caret' : ''}`}></span>
                  );
                }
                return null;
            })()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TypingArea;
