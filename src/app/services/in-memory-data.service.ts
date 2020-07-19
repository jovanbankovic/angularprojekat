import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MusicItem } from '../models/music-item.model';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    // tslint:disable-next-line:typedef
    createDb() {
        const musicGenres = [
            { id: 1, name: 'HipHop' },
            { id: 2, name: 'Rock' },
            { id: 3, name: 'Trap' },
            { id: 5, name: 'Pop' }
        ];
        const musicItems = [
            {
                id: 1,
                name: 'BLAME IT ON BABY',
                price: 12,
                madeBy: 1,
                picture: 'https://media.pitchfork.com/photos/5e9de95a2071a50008c2bd34/1:1/w_600/Blame%20It%20On%20Baby_DaBaby.jpg',
                author: 'DaBaby',
                releaseDate: '17.04.2020',
                awards: 'Grammy 2020',
                genre: 'HipHop',
                rate: 5
            },
            {
                id: 2,
                name: 'BABY ON BABY',
                price: 10,
                madeBy: 1,
                picture: 'https://media.pitchfork.com/photos/5c7d4c1b4101df3df85c41e5/1:1/w_600/Dababy_BabyOnBaby.jpg',
                author: 'DaBaby',
                releaseDate: '01.03.2019',
                awards: '/',
                genre: 'HipHop',
                rate: 5
            },
            {
                id: 3,
                name: 'ASTROWORLD',
                price: 15,
                madeBy: 3,
                picture: 'https://images-na.ssl-images-amazon.com/images/I/81hMEx3kLqL._SL1200_.jpg',
                author: 'Travis Scott',
                releaseDate: '03.08.2018',
                awards: 'BET Award 2019',
                genre: 'Trap',
                rate: 5
            },
            {
                id: 4,
                name: '17',
                price: 10,
                picture: 'https://media.pitchfork.com/photos/59a73b170f1e570bad6cc33f/1:1/w_600/17_xxx.jpg',
                author: 'XXXTentacion',
                releaseDate: '25.08.2017',
                awards: '/',
                genre: 'HipHop',
                rate: 5,
                madeBy: 1
            },
            {
                id: 5,
                name: 'AFTER HOURS',
                price: 13,
                madeBy: 5,
                picture: 'https://www.musicumpire.co.uk/wp-content/uploads/2020/04/After-Hours_The-Weeknd.jpg',
                author: 'The Weeknd',
                releaseDate: '20.03.2020',
                awards: 'Grammy 2020',
                genre: 'Trap',
                rate: 5
            },
            {
                id: 6,
                name: 'PRIORITETI',
                price: 13,
                madeBy: 1,
                picture: 'https://images.genius.com/d4518c8deb67c1ff5ca148a86b22c38e.1000x1000x1.jpg',
                author: 'Klinac',
                releaseDate: '06.01.2020',
                awards: '/',
                genre: 'HipHop',
                rate: 5
            },
            {
                id: 7,
                name: 'PHYSICAL GRAFFITI',
                price: 15,
                madeBy: 2,
                picture: 'https://images-na.ssl-images-amazon.com/images/I/91wA6mJcfBL._SL1425_.jpg',
                author: 'Led Zeppelin',
                releaseDate: '24.02.1975',
                awards: '/',
                genre: 'Rock',
                rate: 5
            }

        ];
        return { musicItems, musicGenres };
    }
    genId(musicItems: MusicItem[]): number {
        return musicItems.length > 0
          ? Math.max(...musicItems.map((musicItem) => musicItem.id)) + 1
          : 11;
    }
}

