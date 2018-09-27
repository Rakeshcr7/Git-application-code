import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class ReqservicesService {

  constructor(private _http: HttpClient, public toastr: ToastrService) {
  }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    console.log(err.status);
    return Observable.throw(err.message);
  }

  public repos(t): any {
    let hd = new HttpHeaders()
      .set("Authorization", `token ${t}`);
    let res = this._http.get("https://api.github.com/user/repos", { headers: hd });
    return res;
  }

  public pplrepos(n) {
    let res = this._http.get(`https://api.github.com/users/${n}/repos`);
    return res;
  }

  public gist(t): any {
    let hd = new HttpHeaders()
      .set("Authorization", `token ${t}`);
    let res = this._http.get("https://api.github.com/gists", { headers: hd });
    return res;
  }

  public pplgist(n) {
    let res = this._http.get(`https://api.github.com/users/${n}/gists`);
    return res;
  }
  
  public starred(s) {
    let hd = new HttpHeaders()
      .set("Authorization", `token ${s}`);
    let res = this._http.get(`https://api.github.com/user/starred`, { headers: hd });
    return res;
  }

  public pplstarrred(s) {
    let res = this._http.get(`https://api.github.com/users/${s}/starred`);
    return res;
  }

  public followers(f) {
    let hd = new HttpHeaders()
      .set("Authorization", `token ${f}`);
    let res = this._http.get(`https://api.github.com/user/followers`, { headers: hd });
    return res;
  }
  public pplfollowers(n) {
    let res = this._http.get(`https://api.github.com/users/${n}/followers`);
    return res;
  }

  public followings(n) {
    let res = this._http.get(`https://api.github.com/users/${n}/following`);
    return res;
  }

  public searchuser(usr) {
    let res = this._http.get(`https://api.github.com/search/users?q=${usr}`);
    return res;
  }

  public login(t): any {
    let hd = new HttpHeaders()
      .set("Authorization", `token ${t}`);
    let res = this._http.get("https://api.github.com/user", { headers: hd });
    return res;
  }

  public ppl(fullurl) {
    let res = this._http.get(`${fullurl}`);
    return res;
  }

}
