import { Module } from '@nestjs/common';
import {TestAirflowService} from './test_airflow.service';
import {TestAirflowController} from './test_airflow.controller';
import { CryptoPrice } from './test_airflow.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([CryptoPrice])],
    controllers: [TestAirflowController],
    providers: [TestAirflowService]
})
export class TestAirflowModule {}
