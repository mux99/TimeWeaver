import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'sign-up-page',
  templateUrl: './signUpPage.component.html',
  styleUrls: ['./signUpPage.component.scss']
})

export class SignUpPage {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // remove this component from the DOM
        document.querySelectorAll('[rel$="-page"]').forEach(item => {
          let tag = false;
          if (item.tagName != 'sign-up-page' || tag) {
            item.parentNode?.removeChild(item);
          } else {
            tag = true;
          }
        });
      });
  }
}