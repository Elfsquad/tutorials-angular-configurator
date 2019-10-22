import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var Elfskot;

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {

  private configuration = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.startNewSession(params['id']);
    });

    Elfskot.on('configurationUpdated', (configuration) => {
      this.configuration = configuration;
    });
  }

  private startNewSession(id: string) : void {
    Elfskot.configurator.startNewConfiguration(id, 'en', (configuration) => {
      this.configuration = configuration;
    });
  }

}