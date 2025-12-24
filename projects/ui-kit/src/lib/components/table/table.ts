import { Component, Input } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'ui-table',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './table.html',
  styleUrls: ['./table.css']
})
export class UiTableComponent {
  @Input() rowData: any[] = [];
  @Input() columnDefs: ColDef[] = [];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true
  };
}
