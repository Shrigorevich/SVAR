import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

import { CreateAchievementDto } from 'src/Dto/CreateAchievementDto';
import { AchievementsService } from './achievements.service';

@Controller('achievements')
export class AchievementsController {
  constructor(private readonly achievementsService: AchievementsService) {}

  @Get()
  getAchievements(@Query('userId') userId: string) {
    return this.achievementsService.getAchievements(userId);
  }

  @Get(':id')
  getAchievement(@Param() params): void {
    this.achievementsService.getAchievement(params.id);
  }

  @Post()
  createAchievement(@Body() achievement: CreateAchievementDto): void {
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
