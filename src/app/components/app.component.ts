import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MusicItem } from '../models/music-item.model';
import { GetItems } from '../store/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Soundable';
  constructor(private store: Store<{items: []; cart: [] }>){
    store.pipe(select('shop')).subscribe(data=> (this.cart = data.cart))
  }
  cart: MusicItem[] = [];
  display = false;

  onPress()
  {

    this.display = !this.display;
  }
}
