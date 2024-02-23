import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

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
}
