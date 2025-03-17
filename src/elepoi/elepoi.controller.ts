import { Controller, Get, Query } from "@nestjs/common";
import { ElepoiService } from "./elepoi.service";
import { Elepoi } from "./elepoi.entity";
import { ElepoiNearbyDto } from "./elepoi-nearby-dto";

@Controller("elepoi")
export class ElepoiController {
    constructor(private readonly elepoiService: ElepoiService) {}


    @Get()
    async findAll(): Promise<Elepoi[]>{
        return this.elepoiService.findAll();
    }


    @Get('nearby')
    async findNearby(@Query() query: ElepoiNearbyDto): Promise<Elepoi[]> {
    return this.elepoiService.findNearby(query.x, query.y, query.radius);
  }


}