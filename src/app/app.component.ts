import { Component } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Dashboard';
  isLoading = false;
  constructor(private loaderserv: LoaderService) {
    this.loaderserv.isLoaded.subscribe((val) => (this.isLoading = val));
  }
}
