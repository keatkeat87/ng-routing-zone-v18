import { Component } from '@angular/core';
import { PageContentComponent } from "../page-content/page-content.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PageContentComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
