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
            .post('/openMatchToTv', this.matchToTvOpen)
            .post('/closeMatchToTv', this.matchToTvClose)
            .post('/play_Match', this.is_played_matchToTv)
            .post('/open_TVmenu', this.open_TVmenu)
            .post('/controlMenuTV', this.control_TVmenu)
            .post('/VideoMenuTV', this.videos_TVmenu)
            .post('/exitVideo', this.exitVideo)
            .post('/openStatisticsToOtherDevices', this.openStatisticsToOtherDevices)
            .post('/open_cska_article', this.open_cska_article)
            .post('/defaultPageWall', this.defaultPageWall)
            .post('/open_Punter_ToWall', this.open_Punter_ToWall);
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
    
    public matchToTvOpen(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;

        //Sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);

    }
    public matchToTvClose(req: Request, res: Response) {
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

    public videos_TVmenu(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;

        //Sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);

    }

    public exitVideo(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;

        //Sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);

    }
    
    public openStatisticsToOtherDevices(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;

        //Sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);

    }

    

    public open_cska_article(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;

        //Sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);

    }
    
    public defaultPageWall(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;

        //Sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);

    }

    public open_Punter_ToWall(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;

        //Sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);

    }
    
    

}
