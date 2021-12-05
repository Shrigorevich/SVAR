import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateAchievementDto } from 'src/Dto/CreateAchievementDto';

@Injectable()
export class AchievementsService {
  constructor(private readonly dbService: DatabaseService) {}

  async getAchievements(userId: string): Promise<any> {
    return this.dbService.executeQuery(
      `SELECT a.title, a.description, aa.* FROM achievements a JOIN attached_achievements aa ON a.id = aa.achievement_id ${
        userId ? "WHERE aa.user_id='" + userId + "'" : ''
      }`,
    );
  }

  getAchievement(id: string): any {}

  async createAchievement(achievement: CreateAchievementDto): Promise<any> {
    this.dbService.executeQuery(
      `WITH rows as (INSERT INTO achievements (title, description) VALUES ('${achievement.title}', '${achievement.description}') RETURNING id) INSERT INTO attached_achievements (achievement_id, user_id) VALUES ((SELECT id FROM rows), '${achievement.userId}');`,
    );
  }

  updateAchievement(achievement: CreateAchievementDto): any {}
}
