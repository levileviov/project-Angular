import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { HttpService } from '../http.service';
import { Contact, meansOfCommunication, moclevel } from './contacs.interface';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit{


  // הכנסנו את זה למשנה בתוך הקלאס ע"מ שנוכל להשתמש בו ב-HTML
  // לא חובה להשתמש באותו שם - אך ככה מקובל

  openModel: boolean = false;

  searchVal: string = '';

  newTask?: string;

  meansOfCommunication = meansOfCommunication;
  
  moclevel: { [key: number]: string } = moclevel.reduce((obj, x) => { return { ...obj, [x.stasus]: x.title } }, {});

  displayMode = [
    { mode: 'columns', icon: 'columns' },
    { mode: 'list', icon: 'list' },
    { mode: 'folders', icon: 'folder' },
  ];

 
  data: Contact[] = [];

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


  remove(item: Contact) {
    const sub = this.http.delete<void>(`contacts/${item.id}`).pipe(finalize(() => {
      if (sub?.unsubscribe) {
        sub.unsubscribe();
      }
    })).subscribe(() => {
      const i = this.data.findIndex(x => x.id === item.id);
      this.data.splice(i, 1);
    });
  }

  changeDisplayMode(mode: string) {
    localStorage["displayModeContact"] = mode;

  }

  getDisplayMode() {
    return localStorage["displayModeContact"];
  }


  constructor(private http: HttpService, private router: Router) {

  }


  ngOnInit() {

    // moclevel.forEach(x => this.moclevel[x.stasus] = x.title);

    if (localStorage["displayModeContact"] == undefined) {
      localStorage["displayModeContact"] = "list";
    }

    const sub = this.http.get<Contact[]>('contacts').subscribe(data => {
      this.data = data;

      sub.unsubscribe();
    })

  }


}
