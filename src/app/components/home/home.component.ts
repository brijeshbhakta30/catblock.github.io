import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private safariURL = '//github.com/CatBlock/catblock/releases/download/v1.5.1/catblock-safari.safariextz';
  private firefoxURL = '//addons.mozilla.org/firefox/addon/adblock-with-catblock/';
  browsers: {
    chrome: any; // To avoid typecasting to any.
    opera: any; // To avoid typecasting to any.
    safari: Object;
    edge: Object;
    firefox: Object;
  };
  isBrowserSupported: Boolean;
  downloadButtonText: String;
  constructor() { }
  setBrowsers(): void {
    // Let's detect the browser, and show a Safari downloads link if it's unsupported
    // typecasting to any as typescript error
    // https://stackoverflow.com/questions/18083389/ignore-typescript-errors-property-does-not-exist-on-value-of-type
    const chrome = (window as any).chrome;
    const opera = (window as any).opr;
    const safari = (window as any).safari;
    const edge = chrome && (navigator.userAgent.indexOf('Edge') > -1);
    const firefox = navigator.userAgent.indexOf('Firefox') > -1;
    this.browsers = { chrome, opera, safari, edge, firefox };
  }
  setDownloadSettings(): void {
    const { chrome, opera, safari, edge, firefox } = this.browsers;
    this.isBrowserSupported = !!(opera || (chrome && !edge) || safari || firefox);
    this.downloadButtonText = (this.isBrowserSupported && 'Install CatBlock now!')
      || 'CatBlock is not available for your browser.';
  }

  downloadButtonClick(): void {
    const { chrome, opera, safari, edge, firefox } = this.browsers;
    if (opera) {
      opera.addons.installExtension('pejeadkbfbppoaoinpmkeonebmngpnkk');
    } else if (chrome && !edge) {
      chrome.webstore.install();
    } else if (safari) {
      window.location.href = this.safariURL;
    } else if (firefox) {
      window.location.href = this.firefoxURL;
    }
  }

  ngOnInit() {
    this.setBrowsers();
    this.setDownloadSettings();
  }
}
