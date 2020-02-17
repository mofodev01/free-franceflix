import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class JsonDataProvider {

  constructor(public http:  HttpClient) {
    console.log('Hello JsonDataProvider Provider');
  }

   /*-------------------------------api-json-server-free---X----------------------------*/

apiUrl_live_server = 'http://space.appmofix.com/api/liste_free_server.php';

getLiveserver(): Observable<{}> {
return this.http.get(this.apiUrl_live_server).pipe(
map(this.extractDataserver),
catchError(this.handleErrorserver)
);
}

private extractDataserver(res: Response) {
let body = res;
return body || { };
}

private handleErrorserver (error: Response | any) {
let errMsg: string;
if (error instanceof Response) {
const err = error || '';
errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
} else {
errMsg = error.message ? error.message : error.toString();
}
console.error(errMsg);
return Observable.throw(errMsg);
}
/*---------------------------------fin--------------------------------*/

  /*-------------------------------api-json-country-live----X----------------------------*/

apiUrl_live_Country = 'http://space.appmofix.com/api/liste_country_live_free.php';

getLiveCountry(): Observable<{}> {

  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       });    
       let options = {
    headers: httpHeaders
       };

return this.http.get(this.apiUrl_live_Country,options).pipe(
map(this.extractDataCountry),
catchError(this.handleErrorCountry)
);
}

private extractDataCountry(res: Response) {
let body = res;
return body || { };
}

private handleErrorCountry (error: Response | any) {
let errMsg: string;
if (error instanceof Response) {
const err = error || '';
errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
} else {
errMsg = error.message ? error.message : error.toString();
}
console.error(errMsg);
return Observable.throw(errMsg);
}
/*---------------------------------fin--------------------------------*/
/*-------------------------------api-detail-country-live-------X-------------------------*/

getLive(id: String ,country: String ): Observable<{}> {

  /** */
  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       });    
       let options = {
    headers: httpHeaders
       };
      

      
    return this.http.get('http://space.appmofix.com/api/filter_channel_free.php?id='+id+'&&country='+country+'',options).pipe(
    map(this.extractData),
    catchError(this.handleError)
    );
    
     
    
    }
    
    private extractData(res: Response) {
    let body = res;
    return body || { };
    }
    
    private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
    errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
    }
    /*---------------------------------fin--------------------------------*/
/*------------------------------------------------------------------------------------------------------------------*/
 /*-------------------------------api-json-country-Films------X--------------------------*/
 apiUrl_Films_Country = 'http://space.appmofix.com/api/liste_country_films_free.php';

 getFilmsCountry(): Observable<{}> {
 return this.http.get(this.apiUrl_Films_Country).pipe(
 map(this.extractDataCountryFilms),
 catchError(this.handleErrorCountryFilms)
 );
 }
 
 private extractDataCountryFilms(res: Response) {
 let body = res;
 return body || { };
 }
 
 private handleErrorCountryFilms (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
 const err = error || '';
 errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
 errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
 }
 /*-----------------------------------------------------------------*/

 /*-------------------------------api-detail-country-Films-------X------------------------*/

getFilms(id: String ,country: String ): Observable<{}> {

  /** */
  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       });    
       let options = {
    headers: httpHeaders
       };
      

    return this.http.get('http://space.appmofix.com/api/filter_films_free.php?id='+id+'&&country='+country+'',options).pipe(
    map(this.extractDataFilms),
    catchError(this.handleErrorFilms)
    );
    
     
    
    }
    
    private extractDataFilms(res: Response) {
    let body = res;
    return body || { };
    }
    
    private handleErrorFilms (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
    errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
    }
    /*---------------------------------fin--------------------------------*/


}
