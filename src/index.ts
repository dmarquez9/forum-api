import 'reflect-metadata';
import { startServer } from './app';
import config from './config/variables';
import { connectDB } from './config/database';

(async () => {
	const app = await startServer();
	await connectDB();
	app.listen(config.port, () => {
		console.log(`Server on port ${config.port}`);
	});
})();
