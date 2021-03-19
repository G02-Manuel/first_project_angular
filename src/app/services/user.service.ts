import { Injectable } from '@angular/core';
import { User } from '../components/other/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user !: User

}
