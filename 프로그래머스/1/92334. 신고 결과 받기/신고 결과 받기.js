function solution(id_list, report, k) {
	const uniqueReports = new Set(report);

	const reportedCount = {};
	id_list.forEach((id) => {
		reportedCount[id] = 0;
	});

	uniqueReports.forEach((r) => {
		const [, target] = r.split(" ");
		reportedCount[target]++;
	});

	const banned = new Set();
	for (const id in reportedCount) {
		if (reportedCount[id] >= k) {
			banned.add(id);
		}
	}

	const mailCount = {};
	id_list.forEach((id) => {
		mailCount[id] = 0;
	});

	uniqueReports.forEach((r) => {
		const [reporter, target] = r.split(" ");
		if (banned.has(target)) {
			mailCount[reporter]++;
		}
	});

	return id_list.map((id) => mailCount[id]);
}