import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MusicItem } from '../../models/music-item.model';

@Component({
  selector: 'app-music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.css']
})
export class MusicItemComponent implements OnInit {
  @Input() musicItem: MusicItem;
  @Output() addToCart: EventEmitter<void> = new EventEmitter<void>();

  public modalShow: boolean;
  constructor() {}

  ngOnInit(): void {
    this.modalShow = false;
  }
  // tslint:disable-next-line:typedef
  public addItemToCart() {
    this.addToCart.emit();
  }

  // tslint:disable-next-line:typedef
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
