import { Component, OnInit } from '@angular/core';
import { GetTypesService } from '../get-types.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Types } from '../Types';
@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {
  TYPES:Types[]
  constructor(
    private getTypesService : GetTypesService
  ) { }

  ngOnInit() {
    this.getTypes();
  }
  getTypes() : void{
    this.getTypesService.getTypes()
      .subscribe(TYPES => this.TYPES = TYPES);
  }


}
