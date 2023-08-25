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
    <div className='w-full landscape:w-1/3 h-2/5 landscape:h-[calc(100%-4px)] flex flex-col items-center'>
      <div
        className="emoji block w-full select-none h-[calc(100%-32px)] bg-no-repeat bg-contain bg-center"
        onClick={() => textToSpeech(activeEmoji.d)}
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg width='150px' height='150px' xmlns='http://www.w3.org/2000/svg'><text x='0' y='130px' font-size='130px' clip-path='url(%23emojiClipPath)'>${activeEmoji.e}</text></svg>")`
        }}
      >
      </div>
      <span className='text-[#ffffff99] block w-full text-center py-1 select-none h-8 selected-emoji-name'>
        {activeEmoji.d}
      </span>
    </div>
  );
}

export default EmojiViewer;