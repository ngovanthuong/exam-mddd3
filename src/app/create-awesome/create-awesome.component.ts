import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Awesome} from '../Awesome';
import {AwesomeService} from '../awesome.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-awesome',
  templateUrl: './create-awesome.component.html',
  styleUrls: ['./create-awesome.component.scss']
})
export class CreateAwesomeComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public awesome: Awesome;

  constructor(
    public awesomeService: AwesomeService,
    public routerService: Router
  ) { }

  ngOnInit() {
    this.awesome = new Awesome();
  }
  onAddAwesome() {
    this.subscription = this.awesomeService.addAwesome(this.awesome).subscribe(data => {
      if (data && data.id) {
        this.routerService.navigate(['awesome']);
      }
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
