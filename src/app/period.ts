import { Injectable } from '@angular/core';

export const enum Period {
	Month = 'month',
	Quarter = 'quarter',
}

@Injectable({ providedIn: 'root' })
export class PeriodFormatter {
	format(period: string): string {
		return `Period: ${period}`;
	}
}
