import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

import { CreateAchievementDto } from 'src/Dto/CreateAchievementDto';
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
    this.achievementsService
      .getAchievements()
      .then(console.log)
      .catch(console.log);
  }

  @Get(':id')
  getAchievement(@Param() params): void {
    this.achievementsService.getAchievement(params.id);
  }

  @Post()
  createAchievement(@Body() achievement: CreateAchievementDto): any {
    this.achievementsService
      .createAchievement(achievement)
      .then(console.log)
      .catch(console.log);
  }

  @Put()
  updateAchievement(@Body() achievement: CreateAchievementDto): void {
    this.achievementsService.updateAchievement(achievement);
  }
}
