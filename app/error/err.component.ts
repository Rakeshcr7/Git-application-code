import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,Params, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';

@Component({
  selector: 'app-err',
  templateUrl: './err.component.html',
  styleUrls: ['./err.component.css'],
  providers:[Location]
})

export class ErrComponent implements OnInit {
  public st:any;
  public statustring:any;
  public statusres:any;
  public statusttl:any;
  
  constructor(public _route:ActivatedRoute,public router:Router,public toastr:ToastrService,
    public location:Location){ 
  }

  public logout() {
    if(localStorage.getItem('mytoken')){
      localStorage.removeItem('mytoken');
      this.toastr.success("You are log out from the GITAPP");
      this.router.navigate(['login']);
    }  
  }

  public goback() {
    this.location.back();
  }

  ngOnInit() {

    this._route.queryParams.subscribe((params: Params) => {
      if(params.e!=undefined && params.e!=null)
      {
        this.st = params.e;
        if(this.st==400)
        {
          this.statusttl="Bad Request";
          this.statusres=this.st;
          this.statustring="The request was invalid or cannot be otherwise served. An accompanying error message will explain further. "
        }
        else if(this.st==200)
        {
          this.statusttl="Everything is work fine..";
          this.statusres=this.st;
          this.statustring=`Use system without any bugs . Chilll !!:)`;

        }
        else if(this.st==0)
        {
          this.statusttl="No Response";
          this.statusres=this.st;
          this.statustring=``;

        }
        else if(this.st==403)
        {
          this.statusttl="Authentication failed";
          this.statusres=this.st;
          this.statustring=`The request failed due to invalid credentials.
          Please check your access token and signin with valid token`;

        }
        else if(this.st==404)
        {
          this.statusttl="Not Found";
          this.statusres=this.st;
          this.statustring=`No information available or the requested URL was not found on the server. 
          For example, when the headword could not be found, a region or domain identifier do not exist, or the headword does not contain any attribute that match the filters in the request. It may also be the case that the URL is misspelled or incomplete.`;
        }
        else if(this.st==414)
        {
          this.statusttl="Request URI Too Long";
          this.statusres=this.st;
          this.statustring=`Your token or username or search string exceeds the maximum 128 characters. Reduce the string that is passed to the API by calling only individual words.`;
        }
        else if(this.st==500)
        {
          this.statusttl="Authentication failed";
          this.statusres=this.st;
          this.statustring=`Something is broken.`;
        }
        else if(this.st==502)
        {
          this.statusttl="Bad Gateway";
          this.statusres=this.st;
          this.statustring=`GITHUB API is down or being upgraded.`;
        }
        else if(this.st==503)
        {
          this.statusttl="Service Unavailable";
          this.statusres=this.st;
          this.statustring=`Please try again later.`;
        }
        else if(this.st==504)
        {
          this.statusttl="Gateway timeout";
          this.statusres=this.st;
          this.statustring=`the request couldn’t be serviced due to some failure within our stack. Please try again later.`;
        }
        else if(this.st==408)
        {
          this.statusttl="Request timeout";
          this.statusres=this.st;
          this.statustring=`The API servers are up, but the request couldn’t be serviced due to some failure within our stack. Please try again later.`;
        }
        else if(this.st==411)
        {
          this.statusttl="Length Required";
          this.statusres=this.st;
          this.statustring=`Server rejected the request because the Content-Length header field is not defined and the server requires it.`;
        }
        else if(this.st==414)
        {
          this.statusttl="URI too long";
          this.statusres=this.st;
          this.statustring=`The URI requested by the client is longer than the server is willing to interpret.`;
        }
        else if(this.st==416)
        {
          this.statusttl="Requested range not satisfiable";
          this.statusres=this.st;
          this.statustring=`The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.`;
        }
        else if(this.st==422)
        {
          this.statusttl="Unprocessable Entity (WebDAV)";
          this.statusres=this.st;
          this.statustring=`The request was well-formed but was unable to be followed due to semantic errors.`;
        }
        else if(this.st==429)
        {
          this.statusttl="Too many Requests";
          this.statusres=this.st;
          this.statustring=`The user has sent too many requests in a given amount of time ("rate limiting").`;
        }
        else 
        {
          this.statusres=null;
        }
      }
      else {      
      }
   });
  }

}
