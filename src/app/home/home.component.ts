import { Component } from '@angular/core';
import { PageContentComponent } from "../page-content/page-content.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
