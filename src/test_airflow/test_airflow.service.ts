import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { CryptoPrice } from './test_airflow.entity';

@Injectable()
export class TestAirflowService {
  constructor(
    @InjectRepository(CryptoPrice)
    private cryptoPriceRepository: Repository<CryptoPrice>,
  ) {}

  findAll(): Promise<CryptoPrice[]> {
    return this.cryptoPriceRepository.find();
  }

  async findOne(id : number): Promise<CryptoPrice> {
    const find = await this.cryptoPriceRepository.findOne({ where: { id } });
    if (!find) {
      throw new NotFoundException(`${id } not found ja!`);
    }
        return find;
    }

/*   async findBetween(id1: number, id2: number): Promise<CryptoPrice[]> {
    const find = await this.cryptoPriceRepository.find({ 
      where: { 
        id: Between(id1, id2) 
      } 
    });
    if (!find || find.length === 0) {
      throw new NotFoundException(`CryptoPrices between ids ${id1} and ${id2} not found!`);
    }
    return find;
  } */


  async create(cryptoPrice: CryptoPrice): Promise<CryptoPrice> {
    return this.cryptoPriceRepository.save(cryptoPrice);
  }

  async update(id: number, updateData: Partial<CryptoPrice>): Promise<CryptoPrice> {
    const cryptoPrice = await this.findOne(id);
    Object.assign(cryptoPrice, updateData); 
    return this.cryptoPriceRepository.save(cryptoPrice);
  }

}