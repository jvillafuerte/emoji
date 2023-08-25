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

const App: FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(1);
  const [selectedEmoji, setSelectedEmoji] = useState<number[]>([1, 81]);

  return (
    <div className='main-container w-full h-screen flex flex-col wide:flex-row-reverse wide:px-10 bg-gradient-to-b wide:bg-gradient-to-r from-[#ACF9F7] from-10% via-[#4DB8E1] via-50% to-[#ACF9F7] to-90%'>
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