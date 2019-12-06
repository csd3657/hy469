import * as dotenv from 'dotenv';
import 'module-alias/register';
import { App } from './app';

<<<<<<< HEAD
dotenv.config();
=======
>>>>>>> branchManos

const application = new App();
application.start();

export { application };

