import { Test, TestingModule } from "@nestjs/testing";
import { ElepoiController } from "./elepoi.controller";


describe('ElepoiController',()=>{
    let controller:ElepoiController ;

    beforeEach(async ()=>{
        const module: TestingModule = await Test.createTestingModule({
            controllers:[ElepoiController],
        }).compile();

        controller = module.get<ElepoiController>(ElepoiController);
    });

    it('should be defined',()=>{
        expect(controller).toBeDefined();
    })
})