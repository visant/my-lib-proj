import { Component } from '@angular/core';
import { NgxSoapService, Client } from '@visant/ngx-soap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-lib-proj';
  client: Client;

  constructor(private soap: NgxSoapService) {
    this.soap.createClient('assets/calculator.wsdl')
      .then(client => {
        console.log('Client', client);
        this.client = client;
      })
      .catch(err => console.log('Error', err));
  }

  sum() {
    // this.client.setEndpoint('http://www.dneonline.com/calculator.asmx');

    this.client.call('Add', { intA: 1, intB: 2}).subscribe(res => {
      console.log(res.responseBody);
      console.log(res.result.AddResult);
    }, err => console.log(err));

  }
}
