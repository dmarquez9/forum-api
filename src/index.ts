import 'reflect-metadata';
import app from './app';
import config from './config/variables';
import { connectDB } from './config/database';

(async () => {
	await connectDB();
	app.listen(config.port, () => {
		console.log(`Server on port ${config.port}`);
	});
})();
