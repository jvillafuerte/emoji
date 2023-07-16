import { FC } from 'react';
import { EmojiItem } from '../../types';

const EmojiViewer: FC<{ activeEmoji: EmojiItem }> = ({ activeEmoji }) => {
  return (
    <div className='w-full h-1/2 flex flex-col items-center justify-around'>
      <span className="emoji text-14xl block w-fit select-none h-[calc(100%-40px)] flex-row justify-center items-center">
        {activeEmoji.emoji}
      </span>
      <span className=''>{activeEmoji.description}</span>
    </div>
  );
}

export default EmojiViewer;