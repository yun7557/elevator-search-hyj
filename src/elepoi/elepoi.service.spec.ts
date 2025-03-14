import { Test, TestingModule } from "@nestjs/testing";
import { ElepoiService } from "./elepoi.service"


describe('ElepoiService',()=>{
    let service:ElepoiService;

    beforeEach(async ()=>{
        const module: TestingModule = await Test.createTestingModule({
            providers:[ElepoiService],
        }).compile();

        service = module.get<ElepoiService>(ElepoiService);
    });

    it('should be defined',()=>{
        expect(service).toBeDefined();
    })
})