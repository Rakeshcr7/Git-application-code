import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReqservicesService } from '../reqservices.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public hidetext: boolean = true;
  public details: any = {};
  public tokencopy: any;
  public finaltoken: any;
  public incorrectuser: boolean = false;
  public correctuser: boolean = false;
  constructor(public _route: ActivatedRoute, public router: Router, public reqservice: ReqservicesService, public toastr: ToastrService) {
    
    this.toastr.info("Welcome", 'GIT-APPLICATION', {
      timeOut: 1500
    });
  }
  public login(t): any {
    this.reqservice.login(t).subscribe(
      data => {
        this.finaltoken = t;
        this.details = data;
        if (this.details.login != undefined) {
          this.correctuser = !this.correctuser;
          this.incorrectuser = false;
        }
      },
      error => {
        if (error.status == 401) {
          this.incorrectuser = !this.incorrectuser;
          this.toastr.warning("You are UNAUTHORIZED user!");
          this.toastr.info("Please Create Token from below link.");
        }
        else {
          console.log("error:(");
          console.log(error.status);
          this.router.navigate(['/err'], { queryParams: { e: error.status } });
        }
      }
    )
  }

  public wronguser(u) {
    this.toastr.error(`Sorry We are unable to access your account !:(`);
  }

  public hidetextevent(val) {
    if (val != undefined && val != null && val != "") {
      this.hidetext = !this.hidetext;
    }
  }
  public checkuser(token) {
    if (token != undefined && token != null && token != "") {
      if (token === localStorage.getItem("mytoken")) {
        this.toastr.show("You are already logged in !");
        this.router.navigate(['home']);
        window.location.reload();
      }
      else {
        this.login(token);
        this.tokencopy = token;
      }

    }
  }

  public gotohome() {
    this.router.navigate(['home']);
    localStorage.setItem('mytoken', this.finaltoken);
    window.location.reload();
  }

  ngOnInit() {
 
  }
}
