import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Elepoi } from "./elepoi.entity";


@Injectable()
export class ElepoiService {
    constructor(
        @InjectRepository(Elepoi)
        private elepoiRepository: Repository<Elepoi>,
    ) {}

    async findAll(): Promise<Elepoi[]> {
        return this.elepoiRepository.find();
      }

    async findNearby(x: number, y: number, radius: number): Promise<Elepoi[]> {
        return this.elepoiRepository
          .createQueryBuilder('seoul_train_elevator')
          .where(
            `ST_DWithin(
               ST_SetSRID(ST_MakePoint(:x, :y), 4326)::geography,
               ST_SetSRID(
                 ST_GeomFromWKB(
                   DECODE(seoul_train_elevator.geom, 'hex')
                 ),
                 4326
               )::geography,
               :radius
             )`,
            { x, y, radius },
          )
          .getMany();
      }
      
      
}
