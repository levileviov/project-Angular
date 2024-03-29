import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { HttpService } from './http.service';
import { UserLogin } from './login/login.interface';
import { UtilityService } from './utility.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    

   
    logout() {
        const sub = this.http.get("logout").pipe(finalize(() => {
            if (sub?.unsubscribe) {
                sub.unsubscribe();
            }
        })).subscribe(() => {
            this.utility.setUser();
            this.router.navigate(['login']);
        });
    }

    constructor(public utility: UtilityService, private http: HttpService, private router: Router, private datePipe: DatePipe) {
      //  console.log(this.datePipe.transform(new Date(), "yyyy-MM-dd"));
    }

    ngOnInit() {
        const sub = this.http.get<UserLogin>("login").pipe(finalize(() => {
            if (sub?.unsubscribe) {
                sub.unsubscribe();
            }
        })).subscribe(data => {
            if (data.status == 'error') {
                this.router.navigate(['login']);
            } else {
                this.utility.setUser(data.user);
            }
        });
    }
}
