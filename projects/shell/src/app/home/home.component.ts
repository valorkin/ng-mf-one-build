import { Component, OnInit } from '@angular/core';
import {LookupService} from '../plugins/lookup.service';
import {PluginOptions} from '../plugins/plugin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    body {
      font-family: 'Comfortaa', cursive;
      padding-top: 80px;
      padding-left: 10px;
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #333;

      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }

    li {
      float: left;
      height: 50px;
      margin-top: auto;
      margin-bottom: auto;
    }

    li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      cursor: pointer;
    }

    li a:hover {
      background-color: #111;
    }

    pre {
      background-color: #eee;
      padding:10px;
    }

    .arrow {
      border: solid black;
      border-width: 0 3px 3px 0;
      /*display: inline-block;*/
      padding: 3px;

      float:left;margin:20px;margin-top:60px
    }

    .right {
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }

    .task img {
      height:100px;
    }
    .task p {
      font-weight: bold;
      text-align: center;
    }

    .vertical-menu {
      width: 200px; /* Set a width if you like */
      float: left;
      margin-right:50px;
    }

    .vertical-menu a {
      background-color: #eee; /* Grey background color */
      color: black; /* Black text color */
      display: block; /* Make the links appear below each other */
      padding: 12px; /* Add some padding */
      text-decoration: none; /* Remove underline from links */
    }

    .vertical-menu a:hover {
      background-color: #ccc; /* Dark grey background on mouse-over */
    }

    .vertical-menu a.active {
      background-color: #333; /* Add a green color to the "active/current" link */
      color: white;
    }

    a {
      cursor: pointer;
    }

    plugin-proxy {
      float:left;
      margin:20px;
    }
  `]
})
export class HomeComponent implements OnInit {

  plugins: PluginOptions[] = [];
  workflow: PluginOptions[] = [];
  showConfig = false;

  constructor(
    private lookupService: LookupService) {
  }

  async ngOnInit(): Promise<void> {
    this.plugins = await this.lookupService.lookup();
  }

  add(plugin: PluginOptions): void {
    this.workflow.push(plugin);
  }

  toggle(): void {
    this.showConfig = !this.showConfig;
  }

}
