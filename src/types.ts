export interface EmojiItem {
  emoji: String;
  description: String;
};

export interface EmojiCategory {
  category: String;
  emojis: EmojiItem[];
}

export type EmojiData = EmojiCategory[];