import { startServer } from './app';
import config from './config/variables'

async function main() {
  const app = await startServer();

  app.listen(config.port, () => {
    console.log(`Server on port ${config.port}`);
  });
}

main();