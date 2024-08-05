import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'] // 해당 값을 이용하여 DB 테이블 생성
  synchronize: true // true: 앱을 실행할 때 entity에서 컬럼 수정사항이 있다면, 해당 테이블을 drop한 후 다시 생성
};