import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeService  } from '../../app/service/home.service';
import { HomeClass } from '../home-class';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
 data:Observable<HomeClass[]>| any;
 symbol=[];
 price = [];

  constructor(
    private homeService:HomeService,
    private router: Router,
  ) { }
 
  ngOnInit(): void {
    this.homeService.getAllTrade().subscribe(
      (data) =>{this.symbol=data[0]
        this.price=data[1];
        this.data=data;
      console.log(this.data[0]);
      
    }
    
    
    );


  }

  getDetails(symbol:string){
    this.router.navigate(['details',symbol]);
  }

  
  }


