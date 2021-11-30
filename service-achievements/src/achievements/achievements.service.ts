import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateAchievementDto } from 'src/Dto/CreateAchievementDto';

@Injectable()
export class AchievementsService {
  constructor(private readonly dbService: DatabaseService) {}

  async getAchievements(): Promise<any> {
    try {
      const result = await this.dbService.executeQuery(
        'SELECT a.*, aa.* FROM achievements a JOIN attached_achievements aa ON a.id = aa.achievement_id',
      );
      return Promise.resolve(result);
    } catch (error) {
      Promise.reject(`Something went wrong: ${error}`);
    }
  }

  getAchievement(id: string): any {}

  async createAchievement(achievement: CreateAchievementDto): Promise<any> {
    try {
      await this.dbService.executeQuery(
        `WITH rows as (INSERT INTO achievements (title, description) VALUES ('${achievement.title}', '${achievement.description}') RETURNING id) INSERT INTO attached_achievements (achievement_id, user_id, done) VALUES ((SELECT id FROM rows), '${achievement.userId}');`,
      );
      Promise.resolve();
    } catch (error) {
      Promise.reject(`Something went wrong: ${error}`);
    }
  }

  updateAchievement(achievement: CreateAchievementDto): any {}
}
