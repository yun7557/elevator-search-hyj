import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Elepoi } from "./elepoi.entity";
import { ElepoiController } from "./elepoi.controller";
import { ElepoiService } from "./elepoi.service";


@Module({
    imports:[TypeOrmModule.forFeature([Elepoi])],
    controllers:[ElepoiController],
    providers:[ElepoiService],
})

export class ElepoiModule {}