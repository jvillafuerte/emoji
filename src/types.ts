export interface EmojiItem {
  e: String;
  d: String;
};

export interface EmojiCategory {
  c: String;
  es: EmojiItem[];
}

export type EmojiData = EmojiCategory[];