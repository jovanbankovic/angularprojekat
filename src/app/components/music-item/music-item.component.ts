import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MusicItem } from '../../models/music-item.model';
import { HttpClient } from '@angular/common/http';
import { MusicGenre } from 'src/app/models/music-genre.model';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';

@Component({
  selector: 'app-music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.css']
})
export class MusicItemComponent implements OnInit {
  @Input() musicItem: MusicItem;
  @Output() addToCart: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  public addItemToCart() {
    this.addToCart.emit();
  }
}
