import { AotSummaryResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ISERAWebSite';

  ngOnInit(): void{

    Aos.init(
      {
        once: true,
        mirror: false
      }
    );

    // this.loadJsFile('assets/vendor/owl.carousel/owl.carousel.min.js');
    // // this.loadJsFile('assets/vendor/counterup/counterup.min.js');
    // this.loadJsFile('assets/js/main.js');
  }

  loadJsFile(url): void {
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
