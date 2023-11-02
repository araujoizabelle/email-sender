import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: '',
        auth: {
          user: '',
          pass: '',
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
