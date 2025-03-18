import { IsNumber } from 'class-validator';

export class ElepoiNearbyDto {
  @IsNumber()
  x: number;

  @IsNumber()
  y: number;

  @IsNumber()
  radius: number;
}
