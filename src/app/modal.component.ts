import { Component, Input } from '@angular/core';

@Component({
	selector: 'collegevine-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.sass']
})

export class ModalComponent {
	@Input()
	show: boolean
}
