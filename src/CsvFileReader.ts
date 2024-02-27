import fs from 'fs';
import { MatchResult } from './MatchResult';

type matchData = [Date, string, string, number, number, MatchResult, string]; // tuple

export abstract class CsvFileReader {
  data: matchData[] = [];

  constructor(public fileName: string) {}
  abstract mapRow(row: string[]): matchData;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }

}
