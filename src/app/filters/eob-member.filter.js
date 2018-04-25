class EobMemberFilter {
	static filter(eobs, name) {
		if (!name) return eobs;

		return eobs.filter((e) => e.PatientName === name);
	}

}

export default EobMemberFilter.filter;