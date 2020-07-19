import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { Routes, RouterModule } from '@angular/router';
import { MusicChooseComponent } from './components/music-choose/music-choose.component';
import { Store } from '@ngrx/store';
import { AppRoutingModule } from './components/app-routing.module';
import { AppComponent } from './components/app.component';
import { SearchMusicItemComponent } from './components/search-music-item/search-music-item.component';
import { MusicItemComponent } from './components/music-item/music-item.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    MusicChooseComponent,
    SearchMusicItemComponent,
    MusicItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
