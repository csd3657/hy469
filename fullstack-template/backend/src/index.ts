import * as dotenv from 'dotenv';
import 'module-alias/register';
import { App } from './app';

dotenv.config();

const application = new App();
application.start();

export { application };
