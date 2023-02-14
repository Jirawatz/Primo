import { MergeSort } from './merge';

describe('Testing Merge Function', () => {
  const arr: number[] = [];
  const mergeSort = new MergeSort(arr);
  it('Testing Empty Case', () => {
    const sortedArr: number[] = mergeSort.merge([], []);
    expect(sortedArr).toEqual([]);
  });

  it('Testing One Collection_1 Empty Collection_2', () => {
    const sortedArr: number[] = mergeSort.merge([1], []);
    expect(sortedArr).toEqual([1]);
  });

  it('Testing Empty Collection_1 One Collection_2', () => {
    const sortedArr: number[] = mergeSort.merge([], [1]);
    expect(sortedArr).toEqual([1]);
  });

  it('Testing One Collection_1 One Collection_2', () => {
    const sortedArr: number[] = mergeSort.merge([1], [2]);
    expect(sortedArr).toEqual([1, 2]);
  });

  it('Testing Sorted Collection_1 Sorted Collection_2 that concatenated 2 list', () => {
    const sortedArr: number[] = mergeSort.merge([1, 2, 3, 4], [5, 6, 7, 8]);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('Testing Sorted Collection_1 Sorted Collection_2 intersperse sort order', () => {
    const sortedArr: number[] = mergeSort.merge([1, 3, 5, 7], [2, 4, 6, 8]);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('Testing Sorted Collection_1 Sorted Collection_2 random sort order', () => {
    const sortedArr: number[] = mergeSort.merge([1, 2, 4, 7], [3, 5, 6, 8]);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('Testing Sorted Collection_1 Sorted Collection_2 random sort order and same element', () => {
    const sortedArr: number[] = mergeSort.merge([1, 2, 4, 7], [2, 5, 6, 8]);
    // testing this should fail
    expect(sortedArr).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('Testing Sorted Collection_1 Sorted Collection_2 random sort order and same element', () => {
    const sortedArr: number[] = mergeSort.merge([1, 2, 4, 7], [2, 5, 6, 8]);
    expect(sortedArr).toEqual([1, 2, 2, 4, 5, 6, 7, 8]);
  });
});
