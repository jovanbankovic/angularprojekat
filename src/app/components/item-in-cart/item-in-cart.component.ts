import { Component, OnInit, Input } from '@angular/core';
import { MusicItem } from 'src/app/models/music-item.model';

@Component({
  selector: 'app-item-in-cart',
  templateUrl: './item-in-cart.component.html',
  styleUrls: ['./item-in-cart.component.css']
})
export class ItemInCartComponent implements OnInit {
  @Input() product: MusicItem;
  constructor() { }

  ngOnInit(): void {
  }

}
