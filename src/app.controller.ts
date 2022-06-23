import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    description:
      '문제에 제시된 [end point]에서는 홀따옴표가 있지만, [결과]에는 홀따옴표가 없어서 정규표현식을 사용하여 홀따옴표를 제거하였습니다.',
  })
  userName(@Query('name') name: string) {
    return name.replace(/(\')/g, '') + `님. 안녕하세요.`;
  }
}
