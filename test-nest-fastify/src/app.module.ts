import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApiModule } from './api/api.module';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [ApiModule],
  controllers: [AppController],
  providers: [DatabaseService],
})
export class AppModule {}
