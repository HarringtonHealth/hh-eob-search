import moment from 'moment';

class EobDateFilter {
	static filter(eobs, range) {
		if (!range) return eobs;

		let time;
		switch (range) {
			case 1:
				time = moment().subtract(1, 'month');
				break;
			case 6:
				time = moment().subtract(6, 'month');
				break;
			case 12:
				time = moment().subtract(12, 'month');
				break;
			case 24:
			default:
				time = moment().subtract(24, 'month');
				break;
		}

		return eobs.filter((e) => moment(e.DateRangeBegin).isSameOrAfter(time, 'day'));
	}

}

export default EobDateFilter.filter;