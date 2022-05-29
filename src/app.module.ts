import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './controllers/auth/auth.module';
import { TasksModule } from './controllers/tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.state.${process.env.STAGE}`],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'admin',
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    TasksModule,
    AuthModule,
  ],
})
export class AppModule {}
