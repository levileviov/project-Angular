import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Contact, meansOfCommunication, moclevel } from '../contacs.interface';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.scss']
})
export class AddEditContactComponent {


  meansOfCommunication?: meansOfCommunication;
  contact?: Contact;
   
    sub?: Subscription;
    form?: FormGroup;
    isEditableState?: boolean;
  

    moclevel = moclevel;
   
    buildForm(item?: Contact){
       this.form = new FormGroup({
          firstName: new FormControl(item?.firstName, [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(15),
            ]),
            lastName: new FormControl(item?.lastName, [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(15),
            ]),
            age: new FormControl(item?.age, [
                Validators.required,
                
               
            ]),
            meansOfCommunication: new FormControl(item?.meansOfCommunication, [
                Validators.required,
            ]),
            phone: new FormControl(item?.phone, [
                Validators.required,
                Validators.minLength(9),
                Validators.maxLength(15),
            ]),
            email: new FormControl(item?.email, [
                Validators.required,
                Validators.email,
            ]),
            state: new FormControl(item?.state, [
                
            ]),
            city: new FormControl(item?.city, [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(15),
            ]),
            street: new FormControl(item?.street, [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(15),
            ]),
            houseNamber: new FormControl(item?.houseNamber, [
                Validators.required,
                Validators.maxLength(6),
            ]),
            zipCode: new FormControl(item?.zipCode, [
                Validators.minLength(4),
                Validators.maxLength(10),
            ]),
            info: new FormControl(item?.info, [
                
            ]),
        });
    }
    
    add() {
        const sub = this.http.post<Contact>(`contacts`, this.form?.value).subscribe(data => {
            this.router.navigate(['contacts']);
            sub.unsubscribe();
        });
    }

  

    save() {
            const sub = this.http.put<Contact>(`contacts/${this.contact?.id}`, this.form?.value).subscribe(data => {
                this.router.navigate(['contacts']);
                sub.unsubscribe();
            });
        }
   
        clear() {
            if(this.isEditableState) {
                this.getCustomer(this.contact?.id)
            }else {
                this.buildForm();
            }
        }

    getCustomer(id?: string | number) {  {
        const sub = this.http.get<Contact>(`contact/${id}`).subscribe(item => {
            this.contact = item;
            this.buildForm(item);
            sub.unsubscribe();
        });
    }

    }

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpService) {
    this.sub = this.route.params.subscribe(params => {
        const id = params['id'];

        if (id == 'new') {
            this.isEditableState = false;
            this.buildForm();
        } else {
            this.isEditableState = true;
            this.getCustomer(id);
        }
    });
}
  ngOnInit() {

  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
}
}