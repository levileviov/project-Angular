import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Customers, meansOfCommunication } from '../customers.interface';



@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent {

  meansOfCommunication?: meansOfCommunication;
    customer?: Customers;
   
    sub?: Subscription;
    form?: FormGroup;
    isEditableState?: boolean;
  

    statuses = [
      {status: meansOfCommunication.email, title: 'איימיל'},
      {status: meansOfCommunication.phone, title: 'טלפון'},
      {status: meansOfCommunication.sms, title: 'סמס'},
      {status: meansOfCommunication.post, title: 'דואר'},
    ];
   
    buildForm(item?: Customers){
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
        const sub = this.http.post<Customers>(`customers`, this.form?.value).subscribe(data => {
            this.router.navigate(['customers']);
            sub.unsubscribe();
        });
    }

  

    save() {
            const sub = this.http.put<Customers>(`customers/${this.customer?.id}`, this.form?.value).subscribe(data => {
                this.router.navigate(['customers']);
                sub.unsubscribe();
            });
        }
   
        clear() {
            if(this.isEditableState) {
                this.getCustomer(this.customer?.id)
            }else {
                this.buildForm();
            }
        }

    getCustomer(id?: string | number) {  {
        const sub = this.http.get<Customers>(`customer/${id}`).subscribe(item => {
            this.customer = item;
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