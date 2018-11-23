import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    userDetails: Observable<any[]>;

    connectToFirebase(){
        this.http.put('https://fir-db-40d70.firebaseio.com/data.json',this.userDetails)
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
                
                
            );
    }

    getDataFromFirebase(){
        this.http.get('https://fir-db-40d70.firebaseio.com/data.json')
            .subscribe(
                (response) => {
                    const data = response.json();
                    this.userDetails = data;
                    console.log(this.userDetails);
                    
                    
                },
                (error) => console.log(error)
                
                
            );
    }


}