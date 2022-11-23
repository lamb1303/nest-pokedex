import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { SeedService } from './seed.service';

@ApiTags('Seed')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) { }

  @Get()
  @ApiResponse({status: 201, description: 'Seed Executed', type: Pokemon})
  @ApiResponse({status: 401, description: 'Bad request'})
  findAll() {
    return this.seedService.executeSeed();
  }
} 
