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
  const { c, es: emojiArr } = emojis[activeCategory];

  return (
    <div className='wide:w-2/3 h-3/5 wide:h-full wide:pr-4'>
      <div className='max-w-3xl mx-auto h-full px-2 box-content flex flex-col justify-end'>
        <div
          className='flex flex-col w-[100% - 1px] h-[calc(100%-70px)] wide:h-[calc(100%-10px)] gap-1 overflow-y-auto flex-wrap content-start'
        >
          {
            emojiArr.map((item, index) => (
              <span
                key={`${c}-${index}`}
                onClick={() => setSelectedEmoji([activeCategory, index])}
                className={`w-12 h-12 text-4xl p-1 flex flex-row justify-center items-center select-none focus:rounded-md focus:bg-[#00000066] ${activeCategory === selectedEmoji[0] && index === selectedEmoji[1] ? 'rounded-md bg-[#00000066]' : ''}`}
              >
                {item.e}
              </span>
            ))
          }
        </div>
        <div className='flex flex-row mb-5 wide:mb-1'>
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
      
    </div>
  );
}

export default EmojiGallery;