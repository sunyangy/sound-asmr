import { useState } from "react";

interface ChildComponentProps {
  onChangeVolume: (volume: number) => void;
  volume: number;
}

export default function VolumeAdjuster({
  onChangeVolume,
  volume,
}: ChildComponentProps) {
  // 状态管理音量值（0 到 100）
  //   const [volume, setVolume] = useState<number>(50);
  const [processedVolume, setProcessedVolume] = useState<number>(volume * 100);
  // 处理音量变化
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProcessedVolume(Number(e.target.value));
    // 这里可以触发音量调整逻辑，比如传递给父组件或音频播放器
    // console.log("Volume:", e.target.value);
    onChangeVolume(Number(e.target.value) / 100);
  };

  return (
    <div className="flex items-center space-x-4 p-4">
      {/* 音量图标 */}
      <span className="text-gray-600">
        {/* {volume === 0 ? "🔇" : volume < 50 ? "🔉" : "🔊"} */}
        {processedVolume === 0 ? "🔇" : processedVolume < 50 ? "🔉" : "🔊"}
      </span>
      {/* 滑块 */}
      <input
        type="range"
        min="0"
        max="100"
        value={processedVolume}
        onChange={handleVolumeChange}
        className="w-full h-2 rounded-lg bg-black appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-black-500"
      />
      {/* 当前音量值 */}
      {/* <span className="text-gray-600">{volume}%</span> */}
      {/* <style jsx>{`
        
      `}</style> */}
    </div>
  );
}
