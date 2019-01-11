import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../user/model/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SERVER_API_URL} from '../../app.constants';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  isLoggedIn = false;
  redirectUrl: string;
  public currentUser: Observable<User>;
  public currentUserSubject: BehaviorSubject<User>;

  constructor(private httpClient: HttpClient)
  {
    this.currentUserSubject=new BehaviorSubject<User>( JSON.parse( localStorage.getItem( 'currentUser' ) ) );
    this.currentUser=this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User
  {
    return this.currentUserSubject.value;
  }

  // @ts-ignore
  login(username: string, password: string): Observable<any>
  {
    const httpOptions={
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          authorization: 'Basic '+btoa( username+':'+password )
        } )
    };

    //return this.httpClient.get<any>( SERVER_API_URL+'login', httpOptions );


    return this.httpClient.get<any>( SERVER_API_URL+'login', httpOptions)
      .pipe( map( user =>
      {
        // login successful if there's a Spring Session token in the response
        if(user && user.token)
        {
          // store user details and Spring Session token in local storage to keep user logged in between page refreshes
          localStorage.setItem( 'currentUser', JSON.stringify( user ) );
          this.isLoggedIn=true;
          this.currentUserSubject.next( user );
        }
        return user;
      }));
  }

  logout()
  {
    localStorage.removeItem( 'currentUser' );
    this.currentUserSubject.next( null );
    this.isLoggedIn = false;
  }

  validateSession(): boolean
  {
    let url=SERVER_API_URL+'isvalidsession';

    //this.getSessionDataUsingAsync(url);
    return this.isLoggedIn;
  }


  async getSessionDataUsingAsync(url)
  {
    this.httpClient.get<any>( url).toPromise().then(user=>
    {
      // @ts-ignore
      if(user && user.token)
      {
        localStorage.setItem( 'currentUser', JSON.stringify( user ) );
        this.isLoggedIn=true;
        return true;
      }
    },
      reason =>
      {
        localStorage.removeItem( 'currentUser');
        this.isLoggedIn=false;
        return false;
      });
  }

}
