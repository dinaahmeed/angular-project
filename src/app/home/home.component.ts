import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  trendingbooks:any[]=[];
  posterPrifix:string="https://image.tmdb.org/t/p/w500"
 constructor(_BooksService:BooksService)
 {
  _BooksService.getTrending().subscribe((data)=>
  this.trendingbooks=data.results
  )
    
 } 
  }


  
  


  
  