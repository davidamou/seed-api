import { Injectable, NestMiddleware } from '@nestjs/common';
import { config } from '../config/config';

@Injectable()
export class Authorization implements NestMiddleware {
  use(req, res, next) {
    if (req.headers.seedkey === config.apiKey) {
      next();
    } else {
      res.status(401).send('Not Authorized');
    }
  }
}
