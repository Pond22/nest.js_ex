import { Test, TestingModule } from '@nestjs/testing';
import { TestAirflowController } from './test_airflow.controller';

describe('TestAirflowController', () => {
  let controller: TestAirflowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestAirflowController],
    }).compile();

    controller = module.get<TestAirflowController>(TestAirflowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
