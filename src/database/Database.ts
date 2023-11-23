import * as SQLite from "expo-sqlite";
import { LoadingError } from "../errors";

export class DatabaseService {
  constructor(private db: SQLite.SQLiteDatabase) {}

  query(
    query: string,
    params: string[],
    callback?: SQLite.SQLStatementCallback,
    errorCallback?: SQLite.SQLStatementErrorCallback
  ) {
    this.db.transaction((tx) => {
      tx.executeSql(query, params, callback, errorCallback);
    });
  }

  selectAllFromTable(table: string, callback: SQLite.SQLStatementCallback) {
    this.db.transaction((tx) => {
      tx.executeSql(`SELECT * FROM ${table};`, [], callback, (_, error) => {
        throw new LoadingError({
          name: "LOADING_ERROR",
          message:
            "An error occurred while trying to retrieve the data from the database",
        });
      });
    });
  }
}
