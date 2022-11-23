import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {

    @ApiProperty({
        default: 1,
        description: 'Numero Pokemon',
        minimum: 1
    })
    @IsPositive()
    @IsNumber()
    @Min(1)
    no: number;

    @ApiProperty({
        default: 'Bulbasour',
        description: 'Pokemon nombre',
        minimum: 1
    })
    @IsString()
    @MinLength(1)
    name: string;
}
