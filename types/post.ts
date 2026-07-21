export interface WordPressRenderedContent {
  rendered: string;
}

export interface WordPressAuthor {
  id: number;
  name: string;
}

export interface WordPressFeaturedMedia {
  id: number;
  source_url: string;
  alt_text: string;
  caption?: WordPressRenderedContent;

  media_details?: {
    width?: number;
    height?: number;
    sizes?: Record<
      string,
      {
        source_url: string;
        width: number;
        height: number;
      }
    >;
  };
}

export interface WordPressTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
}

export interface Post {
  id: number;
  slug: string;
  link: string;
  date: string;

  title: WordPressRenderedContent;
  excerpt: WordPressRenderedContent;
  content: WordPressRenderedContent;

  _embedded?: {
    author?: WordPressAuthor[];
    "wp:featuredmedia"?: WordPressFeaturedMedia[];
    "wp:term"?: WordPressTerm[][];
  };
}