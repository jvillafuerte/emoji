import { FC } from 'react';
import { EmojiData } from '../../types';
import CategoryIcon from '../category-icon/CategoryIcon';

interface EmojiGalleryProps {
  activeCategory: number;
  emojis: EmojiData;
  selectedEmoji: number[];
  setSelectedEmoji: any;
  setActiveCategory: any;
}

const EmojiGallery: FC<EmojiGalleryProps> = ({
  activeCategory,
  emojis,
  selectedEmoji,
  setSelectedEmoji,
  setActiveCategory,
}) => {
  const { category, emojis: emojiArr } = emojis[activeCategory];

  return (
    <div className='h-1/2 bg-[#314A57]'>
      <div
        className='uppercase text-[#92A4B6] px-1 py-2'
      >
        {category}
      </div>
      <div
        className='flex flex-col w-[100% - 1px] h-[calc(100%-80px)] gap-1 overflow-y-auto flex-wrap'
      >
        {
          emojiArr.map((item, index) => (
            <span
              key={`${category}-${index}`}
              onClick={() => setSelectedEmoji([activeCategory, index])}
              className={`w-11 h-11 text-4xl p-1 flex flex-row justify-center items-center ${activeCategory === selectedEmoji[0] && index === selectedEmoji[1] ? 'rounded-md bg-slate-500' : ''}`}
            >
              {item.emoji}
            </span>
          ))
        }
      </div>
      <div className='flex flex-row'>
        {
          emojis.map((_, index) => (
            <CategoryIcon
              key={index}
              category={index}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          ))
        }
      </div>
    </div>
  );
}

export default EmojiGallery;