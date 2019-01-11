import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../user/model/user';
import {HttpClient} from '@angular/common/http';
import {SERVER_API_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  isLoggedIn = false;

  redirectUrl: string;
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private httpClient: HttpClient)
  {
    this.currentUserSubject=new BehaviorSubject<User>( JSON.parse( localStorage.getItem( 'currentUser' ) ) );
    this.currentUser=this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User
  {
    return this.currentUserSubject.value;
  }


  login(username: string, password: string): Observable<boolean>
  {
    return this.httpClient.post<any>( SERVER_API_URL+'/login', {username, password} )
      .pipe( map( user => {
        // login successful if there's a jwt token in the response
        if(user&&user.token)
        {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem( 'currentUser', JSON.stringify( user ) );
          this.currentUserSubject.next( user );
          this.isLoggedIn=true;
        }
        return user;
      } ) );

    /*   return of(true).pipe(
         delay(1000),
         tap(val => this.isLoggedIn = true));*/
  }

  logout()
  {
    localStorage.removeItem( 'currentUser' );
    this.currentUserSubject.next( null );
    this.isLoggedIn = false;
  }
}
