import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
	selector: 'tr[collegevine-school-item]',
	templateUrl: './school-item.component.html',
	styleUrls: ['./school-item.component.sass']
})

export class SchoolItemComponent {
	@Input()
	schoolItem;
	@Output() openModal: EventEmitter = new EventEmitter();

	constructor () {

	}

	handleButtonClick () {
		this.openModal.emit();
	}
}
