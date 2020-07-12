import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent implements OnInit {
 
  constructor(private dragulaService: DragulaService) {
    dragulaService.drag().subscribe((value) => {
     
    });
  }

  ngOnInit() {
  }

}

