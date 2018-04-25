import template from './eob-search.html';
import './eob-search.css';
import { uniqBy } from 'lodash';

export const EobSearchComponent = {
	template,
	controller: class EobSearchController {
		constructor(EobSearchService, $filter, $window) {
			this.loading = true;
			this.EobSearchService = EobSearchService;
			this.$filter = $filter;
			this.$window = $window;
			this.data = [];
			this.members = [];
			this.searchRanges = [
				{ monthsBack: 1, descr: 'Last 1 month' },
				{ monthsBack: 6, descr: 'Last 6 months' },
				{ monthsBack: 12, descr: 'Last 12 months' },
				{ monthsBack: 24, descr: 'Last 24 months' }
			];
			this.monthsBack = this.searchRanges[3].monthsBack;
			this.selectedMember = '';
		}

		// life cycle hooks
		$onInit() {
			this.EobSearchService.getEobs()
				.then((data) => {
					this.data = data;
					let _members = uniqBy(this.data, 'PatientName');
					_members.forEach((m) => this.members.push(m.PatientName));
					this.selectedMember = this.members.length && this.members[0];
					this.loading = false;
				});
			this._listen();
		}

		// public methods
		getFilteredEobs() {
			let eobs = this.data;
			eobs = this.$filter('eobDateFilter')(eobs, this.monthsBack);
			eobs = this.$filter('eobMemberFilter')(eobs, this.selectedMember);
			return eobs;
		}

		getDocument(id) {
			this.EobSearchService.getUrl({ documentId: id })
				.then((data) => this.$window.open(data.URL));
		}

		// private methods
		_listen() {
			this.$window.addEventListener('hh.clear', (event) => this._reset());
			this.$window.addEventListener('hh.select', (event) => this.$onInit());
			this.$window.addEventListener('hh.switch', (event) => this.$onInit());
		}

		_reset() {
			this.data = [];
			this.members = [];
		}
	}
};