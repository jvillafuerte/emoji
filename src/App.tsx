import { FC, useState } from 'react';
import EmojiViewer from './components/emoji-viewer';
import EmojiGallery from './components/emoji-gallery/EmojiGallery';

import emojis from './data/emoji-data.json';

const App: FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(1);
  const [selectedEmoji, setSelectedEmoji] = useState<number[]>([0, 0]);

  return (
    <div className='w-full h-full flex flex-col'>
      <EmojiViewer activeEmoji={emojis[selectedEmoji[0]].emojis[selectedEmoji[1]]} />
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