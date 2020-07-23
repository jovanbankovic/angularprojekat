export interface MusicItem
{
    id: number;
    name: string;
    price: number;
    idInCart: number;
    picture: string;
    author: string;
    releaseDate: string;
    awards: string;
    genre: string;
    rate: number;
}

export class MusicItemInCart {
    constructor(
      public music: MusicItem,
      public countOfSameItem: number
    ) {}
  }
