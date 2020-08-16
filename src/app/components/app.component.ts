import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MusicItem } from '../models/music-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Soundable';
  constructor(private store: Store<{items: []; cart: [];}>){
    store.pipe(select('shop')).subscribe(data=> (this.cart = data['cart']))
  }
  cart: MusicItem[] = [];
  display = false;
  public modalShow = false;

  onPress()
  {

    this.display = !this.display;
  }

  openModal() { this.modalShow = !this.modalShow; }

  displayModal(): string {
    if (this.modalShow)
    {
      return 'block';
    }
    else
    {
      return 'none';
    }
  }
}
