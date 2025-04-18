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
    <div className='w-full wide:w-1/3 h-2/5 wide:h-[calc(100%-4px)] flex flex-col items-center'>
      <div
        className="w-full select-none h-[calc(100%-32px)] flex flex-row items-end justify-center"
      >
        <span
              className='text-emoji-h wide:text-emoji-w'
              onClick={() => textToSpeech(activeEmoji.d)}
            >
              {activeEmoji.e}
            </span>
      </div>
      <span
        className='text-[#ffffff99] block w-full text-center py-1 select-none h-8 selected-emoji-name'
        translate='no'
      >
        {activeEmoji.d}
      </span>
    </div>
  );
}

export default EmojiViewer;