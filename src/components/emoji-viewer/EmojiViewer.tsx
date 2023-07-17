import { FC } from 'react';
import { EmojiItem } from '../../types';

const readOutLoud = (text: String, voices: any) => {
  if ('speechSynthesis' in window) {
    let speakData = new SpeechSynthesisUtterance();

    speakData.lang = 'es-MX';
    speakData.rate = 0.8;
    speakData.text = text as string;
    speakData.voice = voices.filter((item: any) => item.name === 'Paulina')[0];

    speechSynthesis.speak(speakData);
  }
};

const textToSpeech = (text: String) => {
  const interval = setInterval(() => {
    const voices = speechSynthesis.getVoices();

    if (voices.length !== 0) {
      clearInterval(interval);
      readOutLoud(text, voices);
    }
  }, 50);
};

const EmojiViewer: FC<{ activeEmoji: EmojiItem }> = ({ activeEmoji }) => {

  return (
    <div className='w-full h-2/5 flex flex-col items-center'>
      <span
        className="emoji text-12xl block w-fit select-none h-60"
        onClick={() => textToSpeech(activeEmoji.description)}
      >
        {activeEmoji.emoji}
      </span>
      <span className='text-[#ffffff99] block bg-[#00000033] w-full text-center py-1'>
        {activeEmoji.description}
      </span>
    </div>
  );
}

export default EmojiViewer;