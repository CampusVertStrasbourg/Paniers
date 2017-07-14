import { Component } from '@angular/core';
import { CouchdbService } from './shared/services/couchdb.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CouchdbService ]
})
export class AppComponent {
  title = 'app';
}
