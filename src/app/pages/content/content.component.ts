import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover: string = 'https://tse1.mm.bing.net/th?id=OIP.BypcP5XhB3QepH9v4DmuGAHaEK&pid=Api&P=0&h=180'
  contentTitle: string = 'Minha notícia'
  contentDescription:string = 'Ola mundo!'

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe( value =>
      console.log(value.get('id'))
    )
  }
}
