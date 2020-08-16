import { Component, OnInit, Input, Inject } from '@angular/core';
import { MusicItem } from 'src/app/models/music-item.model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-item-in-cart',
  templateUrl: './item-in-cart.component.html',
  styleUrls: ['./item-in-cart.component.css']
})
export class ItemInCartComponent implements OnInit {
  @Input() product: MusicItem;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  msbapTitle = 'Audio Title';
  msbapAudioUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';   
   
msbapDisplayTitle = false; 
msbapDisplayVolumeControls = true;  

  goToUrl(url: string): void {
    console.log(url);
    this.document.location.href = url;
}

}
