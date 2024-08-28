import { Controller, Get } from '@nestjs/common';

@Controller({
  path: 'ping',
  version: '*',
})
export class PingController {
  @Get()
  async ping(): Promise<string> {
    return 'Pong';
  }
}
