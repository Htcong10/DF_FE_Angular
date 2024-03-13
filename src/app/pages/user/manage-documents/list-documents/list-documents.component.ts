import {Component} from '@angular/core';
import {LcService} from 'src/app/service/lc-service/lc.service';
import newcontent from './newcontent.js'
import old from './old.js'
@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.less']
})
export class ListDocumentsComponent {
  username = localStorage.getItem('username');
  role = localStorage.getItem('role');
  listOfData = []
  newStr = newcontent;
  oldStr = old;
  context = 5;
  outputFormat = 'side-by-side';

  constructor(private lcSer: LcService) {
  }

  getList() {
    this.lcSer.list().subscribe((res) => {
      this.listOfData = res;
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getList();
  }
}
