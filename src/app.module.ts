import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsModule } from './products/products.module';
import { TestAirflowModule } from './test_airflow/test_airflow.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',  
      port: 3306,  
      username: 'airflow',  
      password: 'airflow',  
      database: 'airflow',  
      autoLoadEntities: true,
      synchronize: true,  
    }),
    ProductsModule,
    TestAirflowModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}