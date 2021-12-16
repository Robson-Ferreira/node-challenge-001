import Logger from '../../../common/Logger';

export class NewsController {
  async get(req, res) {
    try {
      Logger.info(`Request -> ${JSON.stringify(req.ip)}`);
      return res.json({ message: 'Hello, thats work!' });
    } catch (e) {
      console.log(e);
    }
  }
}

export default new NewsController();
