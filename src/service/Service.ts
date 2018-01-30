import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Service {
  constructor(public http: Http) {}
  private extractData(res) {

    //let serviceData;
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    //serviceData = (res.json());
    //return serviceData || {};
    return res;
  }
  getInfo() {
    return this.http
      .get('http://localhost:8080/BLAPP_BACK-1.0-SNAPSHOT/blapp/test', null)
      .map(this.extractData);
      }
}
