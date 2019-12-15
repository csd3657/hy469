import { Request, Response, NextFunction, Router } from 'express';
import { NotFound, BadRequest } from 'http-errors';
import { DIContainer, MinioService, SocketsService } from '@app/services';
import { logger } from '../../../utils/logger';

export class ExampleController {

    /**
     * Apply all routes for example
     *
     * @returns {Router}
     */
    /*
    public applyRoutes(): Router {
        const router = Router();

        router
            //.post('/sendMessageToClients', this.sendMessageToClients)
            .post('/treatSomeone', this.treatSomeone)
            .get('/getMessage', this.getMessage);

        return router;
    }
*/
    public applyRoutes(): Router {
        const router = Router();

        router
            .post('/treatSomeone', this.treatSomeone)
            .post('/openMatchToTv', this.matchToTv)
            .post('/closeMatchToTv', this.matchToTv)
            .post('/play_Match', this.is_played_matchToTv)
            .post('/open_TVmenu', this.open_TVmenu)
            .post('/controlMenuTV', this.control_TVmenu);

        return router;
    }
 
    
    /**
     * Sens a message back as a response
     */
    public getMessage(req: Request, res: Response) {
        logger.info('e getMessage request print message');

        res.json({ message: 'hello' });
    }

    /**
     * Broadcasts a received message to all connected clients
     */
    public sendMessageToClients(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;

        //Sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);

        res.json({ message: 'ok' });

    }
    
    public treatSomeone(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;

        //Sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);

    }
    
    public matchToTv(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;

        //Sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);

    }

    public is_played_matchToTv(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;

        //Sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);

    }

    public open_TVmenu(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;

        //Sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);

    }
    
    public control_TVmenu(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;

        //Sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);

    }
    

}
