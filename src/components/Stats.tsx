import { FC } from 'react';

// --- Type Definitions ---
interface StatsProps {
  wpm: number;
  accuracy: number;
}

// --- Component ---
const Stats: FC<StatsProps> = ({ wpm, accuracy }) => (
  <div className="text-main text-2xl font-semibold mt-8">
    <span>WPM: {wpm}</span> <span className="ml-6">Accuracy: {accuracy}%</span>
  </div>
);

export default Stats;