import { Injectable, NestMiddleware } from '@nestjs/common';
import { appConfig } from '../config/app.config';

@Injectable()
export class Authorization implements NestMiddleware {
  use(req, res, next) {
    if (req.headers.seedkey === appConfig.apiKey) {
      next();
    } else {
      res.status(401).send('Not Authorized');
    }
  }
}
