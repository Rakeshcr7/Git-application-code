import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute,Router } from '@angular/router';
import {ReqservicesService} from './reqservices.service'
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'app';
  constructor(public _route:ActivatedRoute,public router:Router,private location:Location,public reqservice:ReqservicesService,public toastr:ToastrService){
    
  }
  ngOnInit() {
  }
}
