import { ISort } from './ISort';

export class MergeSort implements ISort {
  private _arr: number[];

  constructor(arr: number[]) {
    this._arr = arr;
  }

  /**
   *  Merge two sorted collection and return sorted array
   * @param collection_1 represent first sorted collection
   * @param collection_2  represent second soreted collection
   *
   * @returns merge sorted array
   */
  public merge(collection_1: number[], collection_2: number[]): number[] {
    const sortedArr = [];

    while (collection_1.length > 0 || collection_2.length > 0) {
      if (collection_1.length != 0 && collection_2.length != 0) {
        if (collection_1[0] <= collection_2[0]) {
          const element = collection_1[0];
          sortedArr.push(element);
          collection_1.shift();
        } else {
          const element = collection_2[0];
          sortedArr.push(element);
          collection_2.shift();
        }
      } else if (collection_1.length != 0 && collection_2.length == 0) {
        const element = collection_1[0];
        sortedArr.push(element);
        collection_1.shift();
      } else if (collection_2.length != 0 && collection_1.length == 0) {
        const element = collection_2[0];
        sortedArr.push(element);
        collection_2.shift();
      }
    }
    return sortedArr;
  }
}
