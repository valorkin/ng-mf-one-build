import { Component, OnInit } from '@angular/core';
import {LookupService} from '../plugins/lookup.service';
import {PluginOptions} from '../plugins/plugin';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit {
  prlist: PluginOptions;
  yourfav: PluginOptions;
  constructor(
    private lookupService: LookupService) {
  }

  async ngOnInit(): Promise<void> {
    const plugins = await this.lookupService.lookup();
    this.prlist = plugins.find(p => p.componentName === 'PrListComponent');
    this.yourfav = plugins.find(p => p.componentName === 'YourFavoritesComponent');
  }

}
