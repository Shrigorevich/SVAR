import { Inject, Injectable, Logger } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';

@Injectable()
export class DatabaseService {
  private readonly logger = new Logger(DatabaseService.name);

  constructor(@Inject('DATABASE_POOL') private pool: Pool) {}

  executeQuery(queryText: string, values: any[] = []): Promise<any[]> {
    this.logger.debug(`Executing query: ${queryText} (${values})`);
    //TODO: investigate why try catch does not handle errors
    try {
      return this.pool.query(queryText, values).then((result: QueryResult) => {
        return result.rows;
      });
    } catch (error) {
      return Promise.reject(`Something went wrong: ${error}`);
    }
  }
}
