import {Component, OnInit} from '@angular/core';
import {LcService} from 'src/app/service/lc-service/lc.service';
import newcontent from './newcontent.js'
import old from './old.js'
import {SearchService} from "../../../../service/search.service";

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.less']
})
export class ListDocumentsComponent implements OnInit {
  username = localStorage.getItem('username');
  role = localStorage.getItem('role');
  listOfData = []
  newStr = newcontent;
  oldStr = old;
  context = 5;
  outputFormat = 'side-by-side';
  data = [
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    }
  ];
  searchValue: string = '';

  constructor(private lcSer: LcService, private searchService: SearchService) {
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
    this.searchService.searchValue$.subscribe(value => {
      this.searchValue = value;
      // Gọi hàm hoặc thực hiện các thao tác cần thiết khi giá trị tìm kiếm thay đổi
    });
  }
}
