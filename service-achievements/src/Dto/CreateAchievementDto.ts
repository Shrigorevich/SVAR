import { BaseAchievementDto } from './BaseAchievementDto';

export interface CreateAchievementDto extends BaseAchievementDto {
  userId: string;
}
