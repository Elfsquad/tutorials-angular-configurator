import { Component, OnInit, Input } from '@angular/core';

declare var Elfskot;

@Component({
  selector: 'app-configurator-option',
  templateUrl: './configurator-option.component.html',
  styleUrls: ['./configurator-option.component.css']
})
export class ConfiguratorOptionComponent implements OnInit {

  @Input('feature') feature;

  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    let value = 1;
    if (this.feature.isSelected) {
      value = 0;
    }

    Elfskot.configurator.updateRequirement(this.feature.id, value);
  }
}