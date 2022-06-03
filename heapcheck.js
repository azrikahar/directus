const field = "heapUsed";
const TIME_INTERVAL_IN_MSEC = 40;

setInterval(() => {
	const mu = process.memoryUsage();
	// # bytes / KB / MB / GB
	const gbNow = mu[field] / 1024 / 1024 / 1024;
	const gbRounded = Math.round(gbNow * 100) / 100;

	console.log(`Heap allocated ${gbRounded} GB`);
}, TIME_INTERVAL_IN_MSEC);
