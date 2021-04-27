import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersInfoService {

  constructor(private http: HttpClient) {
  }

  getAllUsers(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
