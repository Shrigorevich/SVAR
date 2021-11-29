import { Injectable } from '@nestjs/common';
import { AchievementDto } from 'src/Dto/AchievementDto';

@Injectable()
export class AchievementsService {
  getAchievements(): any {}

  getAchievement(id: string): any {}

  createAchievement(achievement: AchievementDto): any {}

  updateAchievement(achievement: AchievementDto): any {}
}
