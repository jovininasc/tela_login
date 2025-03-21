import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PathService } from 'src/app/services/path.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private pathService: PathService, private router: Router, private userService: UserService) { }

  displayName$: Observable<string> = this.userService.displayName$;
  isAdmin$: Observable<boolean> = this.userService.isAdmin$;
  ngOnInit(): void {
  }

  logout(): void {
    this.pathService.logout();
    this.router.navigate(['/']);
  }
}
