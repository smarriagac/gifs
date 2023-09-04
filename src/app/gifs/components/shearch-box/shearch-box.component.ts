import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-shearch-box',
  templateUrl: './shearch-box.component.html',
  styleUrls: ['./shearch-box.component.css']
})
export class ShearchBoxComponent {

  @ViewChild('textTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService ){}

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';

  }

}
