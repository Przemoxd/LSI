import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'LSI';
  isDark = false;
  selectedTheme = 'light';
  themeOptions = ['dark', 'light'];

  constructor(private themeService: ThemeService) { }

  switchTheme() {
    this.themeService.switchTheme(this.selectedTheme);
  }
}
