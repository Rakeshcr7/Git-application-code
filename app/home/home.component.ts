import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReqservicesService } from '../reqservices.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Location]
})

export class HomeComponent implements OnInit {
  public token: any;
  public ref: number = 1;
  public listshow: boolean = false;
  public details: any = {};
  constructor(public _route: ActivatedRoute, public router: Router, public reqservice: ReqservicesService, public toastr: ToastrService,
    public location: Location) {

  }
//  Login method
  public login(t): any {
    this.reqservice.login(t).subscribe(
      data => {
        this.details = data;
        this.starred(t);
        this.repos(t);
        this.gist(t);
        this.followers(t);
        this.followings(this.details.login);
      },
      error => {
        console.log("error:(");
        console.log(error.status);
        this.router.navigate(['/err'], { queryParams: { e: error.status } });
      }

    )
  }

  // repos array
  public reposarray: any = [];
  public repos(r): any {
    this.reqservice.repos(r).subscribe(
      data => {
        this.reposarray = data;
        for (let i of this.reposarray) {
        }
      },
      error => {
        console.log("error:(");
        console.log(error.status);
        this.router.navigate(['/err'], { queryParams: { e: error.status } });
      }
    )
  }

  // star array
  public sarray: any = [];
  public sl: any;
  public starred(s): any {
    this.reqservice.starred(s).subscribe(
      data => {
        this.sarray = data;
        this.sl = this.sarray.length;
      },
      error => {
        console.log("error:(");
        console.log(error.status);
        this.router.navigate(['/err'], { queryParams: { e: error.status } });
      }
    )
  }

  public opengist(n) {
    window.open(n);
  }

  public gotorepo(url) {
    window.open(url);
  }

  public g: any = [];
  public gname = [];
  public gist(t) {
    this.reqservice.gist(t).subscribe(
      data => {
        this.g = data;
        for (let i of this.g) {
          for (let f in i.files) {
            this.gname.push({ "name": i.files[f].filename, "link": i.html_url });
          }
        }
      },
      error => {
        console.log("error:(");
        console.log(error.status);
        this.router.navigate(['/err'], { queryParams: { e: error.status } });
      }
    )
  }

  public nouser: boolean = false;
  public userlist: any = [];
  public searchuser(usr) {
    this.listshow = !this.listshow;
    this.reqservice.searchuser(usr).subscribe(
      data => {
        this.userlist = data;
        if (this.userlist.items.length == 0) {
          this.nouser = !this.nouser;
        }
      },
      error => {
        console.log("error:(");
        console.log(error.status);
        this.router.navigate(['/err'], { queryParams: { e: error.status } });
      }
    )
  }

  public gotoprofile(ppl) {
    this.router.navigate(['/people'], { queryParams: { ul: ppl } });
  }

  public u1: any;
  public showlist(u) {
    this.listshow = !this.listshow;
    this.u1 = u;
  }

  public f: any = [];
  public followers(f) {
    this.reqservice.followers(f).subscribe(
      data => {
        this.f = data;
      },
      error => {
        console.log("error:(");
        console.log(error.status);
        this.router.navigate(['/err'], { queryParams: { e: error.status } });
      }
    )
  }

  public fw: any = [];
  public followings(n) {
    this.reqservice.followings(n).subscribe(
      data => {
        this.fw = data;
      },
      error => {
        console.log("error:(");
        console.log(error.status);
        this.router.navigate(['/err'], { queryParams: { e: error.status } });
      }
    )
  }

  public logout() {
    if (localStorage.getItem('mytoken')) {
      localStorage.removeItem('mytoken');
      this.toastr.success("You are log out from the GITAPP");
      this.router.navigate(['login']);
    }

  }

  ngOnInit() {
    this.token = localStorage.getItem('mytoken');
    this.login(this.token); 
  }
}
