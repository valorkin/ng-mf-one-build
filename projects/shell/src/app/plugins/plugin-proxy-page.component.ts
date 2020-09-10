import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LookupService} from './lookup.service';
import {PluginOptions} from './plugin';

@Component({
  template: `
    <plugin-proxy [options]="options"></plugin-proxy>`
})
export class PluginProxyPageComponent implements OnInit {
  options: PluginOptions;

  constructor(
    private lookupService: LookupService,
    private route: ActivatedRoute) {
  }

  async ngOnInit(): Promise<void> {
    const plugins = await this.lookupService.lookup();
    this.route.paramMap.subscribe(
      params => {
        const tag = params.get('proxy-tag');
        const plugin = plugins.find(p => p.tag === tag);
        if (!plugin) {
          // todo: route not found
          this.options = null;
          return;
        }
        // init
        this.options = plugin;
      });
  }

}
