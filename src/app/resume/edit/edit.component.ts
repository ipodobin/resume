import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {ResumeService} from '../shared/resume.service';
import {toPromise} from 'rxjs-compat/operator/toPromise';

export interface Book {
  id: string;
  title: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public books: AngularFireList<Book>;
  public name = 'talentica_java';
  public title = '';
  public items: Observable<any[]>;
  public bookArray = [];

  constructor(
    private authService: AuthService,
    private db: AngularFireDatabase,
    private store: AngularFirestore,
    private router: Router,
    private resumeService: ResumeService
  ) {
    this.books = db.list('/books');
    this.items = store.collection('/items').valueChanges();
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login'])
      .then(function () {
        // console.log('');
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  }

  add() {

    this.resumeService.getResume(this.name).toPromise().then(doc => {

      console.log('id:', doc.id);
      console.log('data:', doc.data());

    });

    // // this.db.list('/books');
    // this.bookArray = [];
    // const booksCollection: AngularFirestoreCollection<Book> = this.store.collection('/items');
    // booksCollection.snapshotChanges().subscribe(res => {
    //   res.map(a => {
    //     const data = a.payload.doc.data() as Book;
    //     data.id = a.payload.doc.id;
    //     this.bookArray.push(data);
    //   });
    // });

    //   .pipe(map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as Book;
    //     data.id = a.payload.doc.id;
    //     return data;
    //   });
    // }));


    // const book = {
    //   title: this.title
    // };
    // this.books.push(book);
    // this.store.collection('/items').doc(this.name).set({
    //   title: this.title
    // })
    //   .then(function () {
    //     // console.log('Document successfully written!');
    //   })
    //   .catch(function (error) {
    //     console.error('Error writing document: ', error);
    //   });
    // this.name = '';
    // this.title = '';
  }

}
