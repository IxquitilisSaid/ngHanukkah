import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-svg-icon',
	template: `
		<svg>
			<use attr.xlink:href="/assets/svg/sprite.svg#{{icon}}"></use>
		</svg>
	`
})
export class SvgIconComponent implements OnInit {
	@Input() icon: string;

	constructor() { }

	ngOnInit() {
	}
}
