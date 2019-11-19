import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Awesome} from "../Awesome";
import {AwesomeService} from "../awesome.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-edit-awesome',
  templateUrl: './edit-awesome.component.html',
  styleUrls: ['./edit-awesome.component.scss']
})
export class EditAwesomeComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public awesome: Awesome;
  public subscriptionParam: Subscription;

  constructor(
    public awesomeService: AwesomeService,
    public routerService: Router,
    public activateRouteService: ActivatedRoute
  ) { }
  ngOnInit() {
    this.awesome = new Awesome();
    this.loadData();
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionParam) {
      this.subscriptionParam.unsubscribe();
    }
  }
  onEditAwesome() {
    this.subscription = this.awesomeService.updateAwesome(this.awesome).subscribe((data: Awesome) => {
      this.routerService.navigateByUrl('');
    } );
  }
  loadData() {
    this.subscriptionParam = this.activateRouteService.params.subscribe((data: Params) => {
      this.subscription = this.awesomeService.getAwesome(data.id).subscribe((awesome: Awesome) => {
        this.awesome = awesome;
      });
    });
  }
}
