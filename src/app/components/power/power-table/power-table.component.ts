import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Power } from '../power';
import { PowerService } from '../power.service';
import { PowerTableDataSource} from './power-table-datasource';

@Component({
  selector: 'app-power-table',
  templateUrl: './power-table.component.html',
  styleUrls: ['./power-table.component.scss']
})
export class PowerTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Power>;
  dataSource!: PowerTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','Pontos de poder'];

  constructor(private powerService: PowerService) {
    //]
  }
  
  ngAfterViewInit(): void {
    this.powerService.getPower().subscribe(res => {
    this.dataSource = new PowerTableDataSource(res)
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  })
  }
}
