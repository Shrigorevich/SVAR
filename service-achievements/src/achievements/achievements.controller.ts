import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

import { AchievementDto } from 'src/Dto/AchievementDto';
import { AchievementsService } from './achievements.service';

@Controller('achievements')
export class AchievementsController {
  constructor(
    private readonly achievementsService: AchievementsService,
    private readonly databaseService: DatabaseService,
  ) {}

  @Get()
  getAchievements(): void {
    console.log('It works');
    this.databaseService.executeQuery(
      "INSERT INTO achievements ('title, description') VALUES ('My first achievement', 'Description of this achievement')",
    );
  }

  @Get(':id')
  getAchievement(@Param() params): void {
    this.achievementsService.getAchievement(params.id);
  }

  @Post()
  createAchievement(@Body() achievement: AchievementDto): any {
    this.achievementsService.createAchievement(achievement);
  }

  @Put()
  updateAchievement(@Body() achievement: AchievementDto): void {
    this.achievementsService.updateAchievement(achievement);
  }
}
