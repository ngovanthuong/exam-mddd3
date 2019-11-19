import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Awesome} from '../Awesome';
import {AwesomeService} from '../awesome.service';

@Component({
  selector: 'app-awesome-list',
  templateUrl: './awesome-list.component.html',
  styleUrls: ['./awesome-list.component.scss']
})
export class AwesomeListComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public awesome: Awesome[] = [];

  constructor(public awesomeService: AwesomeService) { }

  ngOnInit() {
    this.subscription = this.awesomeService.getAllAwesome().subscribe(data => {
      this.awesome = data;
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onDelete(id: number) {
    this.subscription = this.awesomeService.deleteAwesome(id).subscribe((data: Awesome) => {
      this.updateData(id);
    });
  }
  updateData(id: number) {
    for (let i = 0; i < this.awesome.length ; i++) {
      if (this.awesome[i].id === id) {
        this.awesome.splice(i, 1);
        break;
      }
    }

  }

}
