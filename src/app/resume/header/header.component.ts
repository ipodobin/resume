import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../shared/user.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('imageLoad', [
      state('none, void', style({
        opacity: '0.0'
      })),
      state('maximum', style({
        opacity: '1.0'
      })),
      transition('none => maximum', animate('300ms'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  @Input() user: User;
  state = 'none';
  showDetails = true;

  constructor() {
  }

  ngOnInit() {
  }

  public animateImage() {
    this.state = 'maximum';
  }

  public downloadPdf() {
    const data = document.getElementById('resume');
    html2canvas(data).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4');
      const width = pdf.internal.pageSize.getWidth();
      const height = canvas.height * width / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height);
      pdf.save('resume.pdf');
    });
  }
}
