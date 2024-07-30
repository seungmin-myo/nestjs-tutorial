import { Body, Controller, Get, HttpCode, Post, Put } from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cat.dto";
import { CatsService } from "./cats.service";
import { Cat } from "./cats.interface";

@Controller("cats")
export class CatsController {


  constructor(private catsService: CatsService) {
  }

  @Get()
  @HttpCode(200)
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Put()
  @HttpCode(200)
  updateCats(@Body("id") id, @Body("name") name) {
    return { id, name };
  }
}
