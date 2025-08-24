import { FC, Dispatch, SetStateAction } from 'react';
import { PunctuationIcon, TimeIcon, WordsIcon, ZenIcon, QuoteIcon } from './Icons';

// --- Type Definitions ---
interface HeaderProps {
  testMode: 'time' | 'words';
  setTestMode: Dispatch<SetStateAction<'time' | 'words'>>;
  setWordCount: Dispatch<SetStateAction<number>>;
  activeWordCount: number;
  setTimeDuration: Dispatch<SetStateAction<number>>;
  activeTimeDuration: number;
  setWordListKey: Dispatch<SetStateAction<string>>;
  activeWordListKey: string;
}

type ConfigOption = 
  | { type: 'group'; label: string; icon?: JSX.Element; active?: boolean; action?: () => void; }
  | { type: 'separator' }
  | { type: 'wordCount' | 'wordList' | 'timeDuration'; label: number | string; action: () => void; active: boolean; };

// --- Component ---
const Header: FC<HeaderProps> = ({ testMode, setTestMode, setWordCount, activeWordCount, setTimeDuration, activeTimeDuration, setWordListKey, activeWordListKey }) => {
  
  const wordListOptions: ConfigOption[] = [
    { type: 'wordList', label: 'english 100', action: () => setWordListKey('english100'), active: activeWordListKey === 'english100'},
    { type: 'wordList', label: 'english 500', action: () => setWordListKey('english500'), active: activeWordListKey === 'english500'},
    { type: 'wordList', label: 'english 1000', action: () => setWordListKey('english1000'), active: activeWordListKey === 'english1000'},
    { type: 'wordList', label: 'english 5000', action: () => setWordListKey('english5000'), active: activeWordListKey === 'english5000'},
  ];
  
  const wordCountOptions: ConfigOption[] = [10, 25, 50, 100].map((count): ConfigOption => ({ type: 'wordCount', label: count, action: () => setWordCount(count), active: activeWordCount === count }));
  const timeDurationOptions: ConfigOption[] = [15, 30, 60, 120].map((duration): ConfigOption => ({ type: 'timeDuration', label: duration, action: () => setTimeDuration(duration), active: activeTimeDuration === duration }));

  const mainConfigOptions: ConfigOption[] = [
    { type: 'group', label: 'punctuation', icon: <PunctuationIcon /> },
    { type: 'group', label: 'numbers' },
    { type: 'separator' },
    { type: 'group', label: 'time', icon: <TimeIcon />, action: () => setTestMode('time'), active: testMode === 'time' },
    { type: 'group', label: 'words', icon: <WordsIcon />, action: () => setTestMode('words'), active: testMode === 'words' },
    { type: 'group', label: 'quote', icon: <QuoteIcon /> },
    { type: 'group', label: 'zen', icon: <ZenIcon /> },
    { type: 'group', label: 'custom' },
    { type: 'separator' },
  ];

  return (
    <header className="w-full max-w-4xl mx-auto mt-8 flex flex-col items-center space-y-4">
      <h1 className="text-4xl font-bold text-main">kooltype</h1>
      <div className="bg-sub-alt rounded-lg p-2 flex items-center justify-center space-x-4 text-sm text-sub">
          {wordListOptions.map((item, index) => {
              if (item.type !== 'wordList') return null;
              return (
                <button 
                  key={index} 
                  onClick={item.action} 
                  className={`px-2 py-1 rounded-md hover:text-text transition-colors duration-200 ${item.active ? 'text-main' : ''}`}
                > 
                  <span>{item.label}</span> 
                </button>
              )
          })}
      </div>
      <div className="bg-sub-alt rounded-lg p-2 flex items-center justify-center space-x-4 text-sm text-sub">
        {mainConfigOptions.map((item, index) => {
          if (item.type === 'separator') return <div key={index} className="w-px h-6 bg-sub"></div>;
          return (
            <button 
              key={index}
              onClick={item.action}
              disabled={!item.action}
              className={`flex items-center space-x-2 px-2 py-1 rounded-md hover:text-text transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${item.active ? 'text-main' : ''}`}
            >
              {item.type === 'group' && item.icon}
              <span>{item.label}</span>
            </button>
          )
        })}
        {testMode === 'words' ? wordCountOptions.map((item, index) => {
            if (item.type !== 'wordCount') return null;
            return <button key={index} onClick={item.action} className={`px-2 py-1 rounded-md hover:text-text transition-colors duration-200 ${item.active ? 'text-main' : ''}`}><span>{item.label}</span></button>
        }) : null}
        {testMode === 'time' ? timeDurationOptions.map((item, index) => {
            if (item.type !== 'timeDuration') return null;
            return <button key={index} onClick={item.action} className={`px-2 py-1 rounded-md hover:text-text transition-colors duration-200 ${item.active ? 'text-main' : ''}`}><span>{item.label}</span></button>
        }) : null}
      </div>
    </header>
  );
};

export default Header;
