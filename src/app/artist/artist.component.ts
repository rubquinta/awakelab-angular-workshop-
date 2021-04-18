import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SpotifyService } from '../core/spotify.service';
import { Artist } from './artist.model'; 

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(
    private service: SpotifyService,
    private route: ActivatedRoute
  ) { }

  artista : Artist;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.artista = this.service.getArtist(id);

    });

}
}
