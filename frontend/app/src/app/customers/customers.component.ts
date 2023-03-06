import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { HttpService } from '../http.service';
import { Customers, meansOfCommunication, moclevel} from './customers.interface';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

    openModel: boolean = false;

    searchVal: string = '';

    newTask?: string;

    meansOfCommunication = meansOfCommunication;

    moclevel: { [key: number]: string } = moclevel.reduce((obj, x) => { return { ...obj, [x.stasus]: x.title } }, {});
   
    displayMode = [
    {mode: 'columns' , icon:'columns'},
    {mode: 'list' , icon: 'list'},
    {mode: 'folders' , icon: 'folder'},
    ];

    data: Customers[] = [];

    openModal(folderId: number): void {
      const modalId = `modal-${folderId}`;
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = 'block';
    }
  
    closeModal(folderId: number): void {
      const modalId = `modal-${folderId}`;
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = 'none';
    }


    remove(item: Customers) {
      const sub = this.http.delete<void>(`customers/${item.id}`).pipe(finalize(() => {
          if (sub?.unsubscribe) {
              sub.unsubscribe();
          }
      })).subscribe(() => {
          const i = this.data.findIndex(x => x.id === item.id);
          this.data.splice(i, 1);
      });
  }

changeDisplayMode(mode: string) {
localStorage["displayMode"] = mode;

}

getDisplayMode() {
  return localStorage["displayMode"];
}


    constructor(private http: HttpService, private router: Router) { 

    }


    ngOnInit() {

      if(localStorage["displayMode"] == undefined) {
       localStorage["displayMode"] = "list";
      }
      
      const sub = this.http.get<Customers[]>('customers').subscribe(data => {
      this.data = data;
    
        sub.unsubscribe();
      })

    }
}
