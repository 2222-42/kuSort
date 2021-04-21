
function insertionSort(numbers: number[]): number[] {
    for (let i = 0; i < numbers.length; i++) {
        let tmp = numbers[i];
        let k = i;
        for (var j = i - 1; j >= 0; j--) {

            if (numbers[j] > tmp) {
                numbers[j + 1] = numbers[j];
            } else {
                break;
            }

        }

        // let tmp = a[i];
        numbers[j + 1] = tmp;

    }
    return numbers
}

let a = [10, 3, 1, 4, 2];
let result = insertionSort(a);
console.log(result);

let b = [10, 3, 1, 9, 6, 8, 2, 4, 5];
let resultB = insertionSort(b);
console.log(resultB);

export { insertionSort }