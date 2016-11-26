import {logger} from './logger'

export const asyncRequest = (handler) =>
 (req, res) =>
  handler(req, res).catch(e => logger.error('err during request', e));
