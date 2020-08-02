import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MusicItem, MusicItemInCart } from 'src/app/models/music-item.model';

@Component({
  selector: 'app-my-cart-item',
  templateUrl: './my-cart-item.component.html',
  styleUrls: ['./my-cart-item.component.css']
})
export class MyCartItemComponent implements OnInit {
  @Input() public musicItemInCart: MusicItemInCart;
  @Output() removeMusicItemInCart: EventEmitter<MusicItemInCart> = new EventEmitter<MusicItemInCart>();


  public musicItem: MusicItem;
  public countOfSameItem: number;

  constructor() {

  }

  ngOnInit(): void {
    this.musicItem = this.musicItemInCart.music;
    this.countOfSameItem = this.musicItemInCart.countOfSameItem;
  }

  public removeFromCart(): void {
    this.removeMusicItemInCart.emit(this.musicItemInCart);
  }
}
