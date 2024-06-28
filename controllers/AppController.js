import dbClient from "../utils/db";
import redisClient from "../utils/redis";

class AppController {
  static getStatus(request, response) {
    const redisLive = redisClient.isAlive();
    const dbLive = dbClient.isAlive();
    response.status(200).json({ redis: redisLive, db: dbLive });
  }

  static async getStats(request, response) {
    const usersTotal = await dbClient.nbUsers();
    const filesTotal = await dbClient.nbFiles();
    response.status(200).json({ users: usersTotal, files: filesTotal });
  }
}

export default AppController;
