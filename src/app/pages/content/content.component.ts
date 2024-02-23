import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule, NgComponentOutlet],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover: string = 'https://tse1.mm.bing.net/th?id=OIP.BypcP5XhB3QepH9v4DmuGAHaEK&pid=Api&P=0&h=180'
  contentTitle: string = 'Minha notícia'
  contentDescription:string = 'Ola mundo!'
  private id: string | null = '0'

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id')
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id === id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photo

  }
}
