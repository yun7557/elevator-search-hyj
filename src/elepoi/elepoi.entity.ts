import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity({ schema: 'hyj', name: 'elepoi' })
export class Elepoi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'geometry', spatialFeatureType: 'Point', srid: 4326 })
  geom: string;

  @Column({ type: 'text', nullable: true })
  elepoi_addr: string;

  @Column({ type: 'text', nullable: true })
  elepoi_na: string;

  @Column({ type: 'text', nullable: true })
  elepoi_train_na: string;
}
