import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { elepoi } from "./elepoi.entity";


@Injectable()
export class ElepoiService {
    constructor(
        @InjectRepository(elepoi)
        private elepoiRepository: Repository<elepoi>,
    ) {}

    async findAll(): Promise<elepoi[]> {
        return this.elepoiRepository.find();
      }
}
