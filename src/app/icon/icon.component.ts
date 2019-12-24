import {Component, Input, OnChanges, ChangeDetectionStrategy} from '@angular/core';
import {UniqueIDService} from '../unique-id.service';
import '../../assets/svg/menorah1.svg';
import '../../assets/svg/menorah2.svg';
import '../../assets/svg/menorahBlur.svg';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'[attr.title]': 'ariaTitle',
		'[attr.aria-hidden]': 'ariaHidden',
		'[attr.aria-labelledby]': 'ariaLabelledBy',
		'role': 'img'
	},
})
export class IconComponent implements OnChanges {
	@Input() type!: string;
	@Input() title!: string;

	public ariaHidden: true | null;
	public ariaLabelledBy: string | null;
	public ariaTitle: string | null;

	private uniqueIDService: UniqueIDService;

	constructor(uniqueIDService: UniqueIDService) {
		this.uniqueIDService = uniqueIDService;
		this.ariaHidden = true;
		this.ariaLabelledBy = null;
		this.ariaTitle = null;
	}

	public ngOnChanges(): void {

		if (this.title) {
			// If a title was provided, it means that this icon is more than just a
			// decorative element. As such, let's try to make it more accessible to
			// screen-readers.
			this.ariaHidden = null;
			this.ariaLabelledBy = ( this.ariaLabelledBy || this.uniqueIDService.next() );
			this.ariaTitle = this.title;
		} else {
			this.ariaHidden = true;
			this.ariaLabelledBy = null;
			this.ariaTitle = null;
		}

	}

}

