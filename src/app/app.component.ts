import { Component } from '@angular/core';
import CSVData from '../../school-ids-and-names';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
	modalShown: bolean;
constructor() {
	this.schoolData = [];
	this.modalShown = false;

	Object.keys(CSVData).forEach((key) => {
		this.schoolData.push({
			id: key,
			name: CSVData[key],
			img: `https://s3.amazonaws.com/collegevine-assets/schools/${key}-thumb.jpg`
		});
	});
}

openModal () {
		this.modalShown = true;
	}
}
