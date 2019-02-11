import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as rasterizeHTML from 'rasterizehtml';

@Component({
  selector: 'app-html-to-pdf',
  templateUrl: './html-to-pdf.component.html',
  styleUrls: ['./html-to-pdf.component.css']
})
export class HtmlToPdfComponent implements OnInit {

  @ViewChild('resume') resume: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  public captureScreen() {
    // const scale = 2.0;
    // const data = document.getElementById('resume');
    const data = document.body;
    const canvas = document.createElement('canvas');
    canvas.height = data.clientHeight;
    canvas.width = data.clientWidth;
    const html = rasterizeHTML.drawHTML(data.innerHTML, canvas);
    html.then(filledCanvas => {
      document.body.append(filledCanvas);
      // document.body.append(canvas);
      // return;
      // const contentDataURL = canvas.toDataURL('image/png');
      // const pdf1 = new jspdf('p', 'pt', [data.clientWidth, data.clientHeight]);
      // const position = 0;
      // // pdf.addImage(contentDataURL, 'PNG', 0, position, data.clientWidth, data.clientHeight);
      // pdf1.addSvgAsImage(filledCanvas.svg, 0, 0, data.clientWidth, data.clientHeight);
      // pdf1.save('MYPdf.pdf');
    });
  }

  // public captureScreen1() {
  //   const doc = new jspdf();
  //   // const resume = this.resume.nativeElement;
  //   // doc.fromHTML(resume.innerHTML, 0, 0, {
  //   //   width: 150
  //   // });
  //   const data = document.getElementById('resume');
  //   doc.fromHTML(data.innerHTML, 0, 0, {
  //     width: data.clientWidth
  //   });
  //   doc.save('test.pdf');
  // }
  //
  // public captureScreen2() {
  //   const scale = 2.0;
  //   const data = document.getElementById('resume');
  //   // const pdf = new jspdf('p', 'pt', [data.clientWidth, data.scrollHeight]);
  //   // pdf.addHTML(data, 0, 0);
  //   // pdf.save('MYPdf.pdf'); // Generated PDF
  //   // return;
  //   html2canvas(data, {
  //     scale: scale
  //   }).then(canvas => {
  //     // Few necessary setting options
  //     // const imgWidth = 208;
  //     // const pageHeight = 295;
  //     // const imgHeight = canvas.height * imgWidth / canvas.width;
  //     // const heightLeft = imgHeight;
  //
  //     const contentDataURL = canvas.toDataURL('image/png');
  //     const pdf = new jspdf('p', 'pt', [canvas.width / scale, canvas.height / scale]);
  //     const position = 0;
  //     pdf.addImage(contentDataURL, 'PNG', 0, position, canvas.width / scale, canvas.height / scale);
  //     pdf.save('MYPdf.pdf'); // Generated PDF
  //   });
  // }

}
