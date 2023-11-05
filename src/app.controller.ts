import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { SubscribeDto } from './subscribe.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  subscribeEmail(@Body(ValidationPipe) subscribeDto: SubscribeDto): string {
    return `subscribed ${subscribeDto.email}, welcome.`;
  }
}
