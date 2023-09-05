import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {
  ngOnInit(): void {
    if(!this.url) throw new Error('URL property is required')
  }

  @Input()
  public url!: string;

  public hasLoaded: boolean = false;

  @Input()
  public alt: string = '';

  onLoad() {
    setTimeout(() => {
    this.hasLoaded = true;
    }, 1000)
  }

}
