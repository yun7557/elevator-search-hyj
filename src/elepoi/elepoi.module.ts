import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { elepoi } from "./elepoi.entity";
import { ElepoiController } from "./elepoi.controller";
import { ElepoiService } from "./elepoi.service";


@Module({
    imports:[TypeOrmModule.forFeature([elepoi])],
    controllers:[ElepoiController],
    providers:[ElepoiService],
})

export class ElepoiModule {}