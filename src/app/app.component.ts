import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

// import { TreeViewComponent } from './tree-view/tree-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title: String = 'molecular';
  documents: any[];
  private httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  }
  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.getJSON()
    .subscribe(res => {
      this.documents = [res];
    });
  }

  getJSON() : Observable<any>{
    return this._http.get<any>('./assets/data/level2.json');
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof Error) {
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}
