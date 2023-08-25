/**
JSON.stringify(Array.from(document.querySelectorAll('ul.emoji-list li'))
.filter(entry => entry.querySelector('a')?.innerText)
  .map(entry => {
    const [_, ...x] = entry.querySelector('a')?.innerText.split(' ');
    return {
      emoji: entry.getElementsByClassName('emoji')[0]?.innerText,
      description: x.join(' ')
    }
  }), null, 2)
 */

import { FC, useState } from 'react';
import EmojiViewer from './components/emoji-viewer';
import EmojiGallery from './components/emoji-gallery/EmojiGallery';

import emojis from './data/emoji-cleaned.json';

const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test( userAgent );
}
const isInStandaloneMode = () => ('standalone' in (window as any).navigator) && ((window as any).navigator.standalone);

const App: FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(1);
  const [selectedEmoji, setSelectedEmoji] = useState<number[]>([1, 81]);

  let extraStyle = {};

  if (isIos() && isInStandaloneMode()) {
    extraStyle = {
      height: '100vh'
    };
  }

  return (
    <div
      className='w-full h-full flex flex-col wide:flex-row-reverse wide:px-10 bg-gradient-to-b wide:bg-gradient-to-r from-[#B1E0F8] from-10% via-[#55A5FE] via-50% to-[#B1E0F8] to-90%'
      style={extraStyle}
    >
      <EmojiViewer activeEmoji={emojis[selectedEmoji[0]].es[selectedEmoji[1]]} />
      <EmojiGallery
        activeCategory={activeCategory}
        emojis={emojis}
        selectedEmoji={selectedEmoji}
        setSelectedEmoji={setSelectedEmoji}
        setActiveCategory={setActiveCategory}
      />
    </div>
  );
}

export default App;