import { HeroService } from './../hero.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Hero } from '../hero';
import { HeroTableDataSource} from './hero-table-datasource';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Power } from '../../power/power';
import { MatTreeNestedDataSource } from '@angular/material/tree';



@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.scss']
})
export class HeroTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Hero>;
  dataSource!: HeroTableDataSource;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'poderes'];

  constructor(private heroService: HeroService) {
  }
  ngAfterViewInit(): void {
    this.heroService.getHero().subscribe(res => {
    this.dataSource = new HeroTableDataSource(res)
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  })
  }

  hasChild = (_: number, node: Hero) => !!node.power && node.power.length > 0;

}
