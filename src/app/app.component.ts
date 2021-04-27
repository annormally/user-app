import {Component} from '@angular/core';

export type EditorType = 'info' | 'profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-app';

  editor: EditorType = 'info';

  get showUsersInfo(): any {
    return this.editor === 'info';
  }

  get showProfileEditor(): any {
    return this.editor === 'profile';
  }

  toggleEditor(type: EditorType): any {
    this.editor = type;
  }
}
