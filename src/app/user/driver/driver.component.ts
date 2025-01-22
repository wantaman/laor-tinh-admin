import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // getData() {
  //   this.postsService.getData()
  //     .subscribe(response => {
  //       console.log('response', response);
  //       this.drivers = response.results;
  //     });
  // }
}
