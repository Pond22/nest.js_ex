import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('crypto_prices')
export class CryptoPrice {
  @PrimaryGeneratedColumn()
  id: number;

/*   @Column()
  timestamp: string; */

  @Column()
  asset_id: string;

  @Column()
  rank: number;

  @Column()
  symbol: string;

  @Column()
  name: string;

  @Column()
  supply: number;

  @Column()
  max_supply: number;

  @Column()
  market_cap_usd: number;

  @Column()
  volume_usd_24_hr: number;

  @Column()
  price_usd: number;

  @Column()
  change_percent_24_hr: number;

  @Column()
  vwap_24_hr: number;
}
