function quickSortSub(numbers: number[], startID, endID: number) {
    let pivot = numbers[(startID + endID) / 2 | 0];
    let left = startID;
    let right = endID;

    while (true) {
        while (numbers[left] < pivot) {
            left++;
        }

        while (pivot < numbers[right]) {
            right--;
        }

        if (right <= left) {
            break;
        }

        let tmp = numbers[left];
        numbers[left] = numbers[right];
        numbers[right] = tmp;
        left++;
        right--;
    }

    if (startID < left - 1) {
        quickSortSub(numbers, startID, left - 1);
    }

    if (right + 1 < endID) {
        quickSortSub(numbers, right + 1, endID);
    }
}

function quickSort(numbers: number[]): number[] {
    quickSortSub(numbers, 0, numbers.length - 1);
    return numbers
}

let a = [10, 3, 1, 4, 2];
let b = [10, 3, 1, 9, 6, 8, 2, 4, 5];
let c = [10, 3, 1, 9, 7, 6, 8, 2, 4, 5];
let resultA = quickSort(a);
console.log(resultA);
let resultB = quickSort(b);
console.log(resultB);
let resultC = quickSort(c);
console.log(resultC);


export { quickSort }