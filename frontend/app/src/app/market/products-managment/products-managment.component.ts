import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Product } from './products.interface';

@Component({
    selector: 'app-products-managment',
    templateUrl: './products-managment.component.html',
    styleUrls: ['./products-managment.component.scss']
})
export class ProductsManagmentComponent {
    data: Product[] = [];

    remove(item: Product) {
        const sub = this.http.delete<void>(`products/${item.id}`).pipe(finalize(() => {
            if (sub?.unsubscribe) {
                sub.unsubscribe();
            }
        })).subscribe(() => {
            const i = this.data.findIndex(x => x.id === item.id);
            this.data.splice(i, 1);
        });
    }

    constructor(private http: HttpService) {}

    ngOnInit() {
        const sub = this.http.get<Product[]>("products").pipe(finalize(() => {
            if (sub?.unsubscribe) {
                sub.unsubscribe();
            }
        })).subscribe(data => {
            this.data = data;
        });
    }
}
