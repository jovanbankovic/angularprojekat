import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MusicItem, MusicItemInCart } from 'src/app/models/music-item.model';

@Component({
  selector: 'app-my-cart-item',
  templateUrl: './my-cart-item.component.html',
  styleUrls: ['./my-cart-item.component.css']
})
export class MyCartItemComponent implements OnInit {
    ngOnInit(): void {
    }
    @Input() albums: MusicItem[] = [];
}
