import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

declare var Elfskot;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 
  configuration = null;
  isSubmitted = false;
  
  constructor(private router: Router) { }

  ngOnInit() {
    if (!Elfskot.configurator.configuration){
      this.router.navigateByUrl('/');
      return;
    }

    this.configuration = Elfskot.configurator.configuration;
  }

  requestQuote(model) {
    Elfskot.configurator.requestQuote(model, () => {
      this.isSubmitted = true;
    });
  }

}