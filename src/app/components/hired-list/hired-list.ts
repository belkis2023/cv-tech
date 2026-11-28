import { Component, inject, OnInit } from '@angular/core';
import { HireService } from '../../services/hire-service';
import { MiniCv } from '../mini-cv/mini-cv';

@Component({
  imports: [MiniCv],
  selector: 'app-hired-list',
  styleUrl: './hired-list.css',
  templateUrl: './hired-list.html',
})
export class HiredList implements OnInit {
  private hireService = inject(HireService);
  
  hiredCvs = this.hireService.hiredCvs;

  ngOnInit() {
    console.log("cvs", this.hiredCvs);
  }

  
}
