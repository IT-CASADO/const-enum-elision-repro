import { Component } from '@angular/core';
import { Period, PeriodFormatter } from './period';

@Component({
	selector: 'app-root',
	template: '<p>{{ label }}</p>',
})
export class AppComponent {
	protected readonly label: string;

	// PeriodFormatter is only used as a constructor parameter type here, so its import specifier
	// is removed by @ngtools/webpack; that rewrite keeps the `Period` const enum specifier too.
	constructor(formatter: PeriodFormatter) {
		this.label = formatter.format(Period.Month);
	}
}
