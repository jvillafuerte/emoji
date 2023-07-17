import { FC } from 'react';
import {
  FaFaceGrinBeam,
  FaCat,
  FaBowlRice,
  FaBasketball,
  FaMountainCity,
  FaLightbulb,
  FaThumbsUp,
  FaFlag
} from 'react-icons/fa6';

const icons = [
  FaFaceGrinBeam,
  FaCat,
  FaBowlRice,
  FaBasketball,
  FaMountainCity,
  FaLightbulb,
  FaThumbsUp,
  FaFlag
];

const CategoryIcon: FC<{ category: number, activeCategory: number, setActiveCategory: any }> = ({ category, activeCategory, setActiveCategory }) => {
  const isSelected = activeCategory === category;
  let Icon = icons[category];

  return (
    <div
      onClick={() => setActiveCategory(category)}
      className={`w-9 h-9 p-1 m-1 flex flex-row items-center justify-center flex-shrink-0 text-[#00000044] ${isSelected ? 'bg-[#00000055] rounded-full text-[#00000077]': ''}`}
    >
      <Icon size={'1.5rem'} />
    </div>
  );
}

export default CategoryIcon;