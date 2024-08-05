import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  async getMainPage() {
    return "User Main page";
  }
}