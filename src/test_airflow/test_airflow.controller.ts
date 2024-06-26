import { Controller, Get, Post, Body, Param, ParseIntPipe, Patch, Query   } from '@nestjs/common';
import { TestAirflowService } from './test_airflow.service';
import { CryptoPrice } from './test_airflow.entity';

@Controller('test-airflow')
export class TestAirflowController {
    constructor(private readonly testAirflowService: TestAirflowService) {}

    @Get()
    findAll(): Promise<CryptoPrice[]> {
        return this.testAirflowService.findAll();
    }

    @Get(':id')
    findone(@Param('id', ParseIntPipe) id: number): Promise<CryptoPrice> {
        return this.testAirflowService.findOne(id);
    }

/*     @Get('between')
    findBetween(@Query('id1', ParseIntPipe) id1: number, @Query('id2', ParseIntPipe) id2: number): Promise<CryptoPrice[]> {
      return this.testAirflowService.findBetween(id1, id2);
    } */
  

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<CryptoPrice>): Promise<CryptoPrice> {
      return this.testAirflowService.update(id, updateData);
    }

}
    