import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { HttpService } from '../http.service';
import { User } from '../signup/user.interface';
import { UtilityService } from '../utility.service';
import { Nav } from './navbar.interface';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    active: string = '';
    isOpen: boolean = false;
    utility: any;
    private user?: User;

    menu: Nav[] = [
        //{ route: '/', title: 'בית', icon: 'home' },
        { route: '/customers', title: 'לקוחות', icon: 'user' },
        { route: '/contacts', title: 'אנשי קשר', icon: 'list-alt' },
        { route: '/tasks', title: 'משימות', icon: 'tasks' },
        { route: '/about', title: 'אודות', icon: 'info' },
    ];

    sidebar: Nav[] = [
        ...this.menu,
        { route: '/market/products/manage', title: 'ניהול מוצרים', icon: 'edit' },
        { route: '/market/products', title: 'חנות', icon: 'home' },
        { route: '/market/cart', title: 'עגלת קניות', icon: 'shopping-cart', counter: 'cartAmount' },
        // { route: '/market/vegetables', title: 'ירקות', icon: 'carrot' },
        // { route: '/market/fruits', title: 'פירות', icon: 'apple-alt' },
        // { route: '/market/legumes', title: 'קטניות', icon: 'seedling' },
        // { route: '/market/greens', title: 'ירוקים', icon: 'leaf' },
    ];
    logout() {
        const sub = this.http.get("logout").pipe(finalize(() => {
            if (sub?.unsubscribe) {
                sub.unsubscribe();
            }
        })).subscribe(() => {
            this.utility.setUser();
            this.router.navigate(['login']);
        });

        this.authService.signOut().then(data => {
        });
    }


    constructor(private router: Router, utility: UtilityService ,private http: HttpService, private authService: SocialAuthService) {
        this.utility = utility;

        router.events.subscribe(ev => {
            if (ev instanceof NavigationStart) {
                this.active = ev.url;
                this.isOpen = false;
            }
        });

    }

    ngOnInit() {
    }

}
