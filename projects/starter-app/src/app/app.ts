import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { UiButtonComponent } from '../../../ui-kit/src/public-api';
import { UiInputComponent } from '../../../ui-kit/src/public-api';
import { UiModalComponent } from '../../../ui-kit/src/public-api';
import { UiTableComponent } from '../../../ui-kit/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UiButtonComponent,
    UiInputComponent,
    UiModalComponent,
    UiTableComponent
  ],
  template: `
    <h2>Angular UI Library Demo</h2>

    <ui-button>Primary Button</ui-button>

    <ui-input
      label="Email"
      id="email"
      placeholder="Enter email">
    </ui-input>

    <ui-modal [open]="true" title="Demo Modal">
      This is a demo modal.
    </ui-modal>

    @if (isBrowser) {
      <ui-table
        [columnDefs]="cols"
        [rowData]="rows">
      </ui-table>
    }
  `
})
export class AppComponent {
  platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);

  cols = [
    { field: 'name' },
    { field: 'age' }
  ];

  rows = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 28 }
  ];
}

export const App = AppComponent;
