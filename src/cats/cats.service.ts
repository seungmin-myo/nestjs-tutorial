import { Injectable } from "@nestjs/common";
import { Cat } from "./cats.interface";

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  update(cat: Cat)

  findAll(): Cat[] {
    return this.cats;
  }
}
