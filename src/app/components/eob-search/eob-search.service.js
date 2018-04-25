export class EobSearchService {
	constructor($http, $log) {
		this.$http = $http;
		this.$log = $log;
	}

	getEobs() {
		return this.$http.get('/DesktopModules/HpsClaimServicesDnnCore/Api/Eob/GetList')
			.then(res => {
				return (res.status === 200 && res.data.length) ? JSON.parse(res.data) : [];
			})
			.catch(err => {
				this.$log.error(err);
				return [];
			});
	}

	getUrl(params) {
		return this.$http.get('/DesktopModules/HpsClaimServicesDnnCore/Api/Eob/GetUrl',
			{ params: params }
		)
			.then(res => {
				return (res.status === 200 && res.data.length) ? JSON.parse(res.data) : [];
			})
			.catch(err => {
				this.$log.error(err);
				return '';
			});
	}
}