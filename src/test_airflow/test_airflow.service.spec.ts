import { Test, TestingModule } from '@nestjs/testing';
import { TestAirflowService } from './test_airflow.service';

describe('TestAirflowService', () => {
  let service: TestAirflowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestAirflowService],
    }).compile();

    service = module.get<TestAirflowService>(TestAirflowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
