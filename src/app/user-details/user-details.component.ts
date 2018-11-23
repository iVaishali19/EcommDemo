import { Component, OnInit, OnChanges } from '@angular/core';

import { Http } from '@angular/http';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
   
  user: Observable<any[]>;
  constructor(private userService: UserService) { 

  }

  ngOnInit() {
    this.user = this.userService.userDetails;
  }



  

  addFunction(){
    //this.userService.connectToFirebase();
    this.userService.getDataFromFirebase();
    
  }

}
