import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IUsers} from '../users-info.model';
import {UsersInfoService} from '../users-info.service';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css']
})
export class UsersInfoComponent implements OnInit {

  constructor(private usersService: UsersInfoService) {
  }

  users$: Observable<IUsers[]> = this.usersService.getAllUsers();

  ngOnInit(): void {

  }
}
