import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AchievementsService } from './achievements/achievements.service';
import { AchievementsController } from './achievements/achievements.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
  ],
  controllers: [AppController, AchievementsController],
  providers: [AppService, AchievementsService],
})
export class AppModule {}
