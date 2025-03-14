import { Controller, Get } from "@nestjs/common";
import { ElepoiService } from "./elepoi.service";
import { elepoi } from "./elepoi.entity";

@Controller("elepoi")
export class ElepoiController {
    constructor(private readonly elepoiService: ElepoiService) {}


    @Get()
    async findAll(): Promise<elepoi[]>{
        return this.elepoiService.findAll();
    }


//     @Get('nearby')
//   async findNearby(@Query() query: BldgNearbyDto): Promise<Bldg[]> {
//     return this.bldgService.findNearby(query.x, query.y, query.radius);
//   }


}