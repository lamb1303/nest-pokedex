import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios'
import { PokeAPIResponse } from './interface/pokemon-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;
  async executeSeed() {
    const { data } = await this.axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon?limit=10')

    data.results.forEach(({ name, url }) => {

      const segments = url.split('/');
      const no: number = +segments[segments.length - 2]

    })
    return data.results
  }
}
