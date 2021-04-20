
function insertionSort(numbers: number[]): number[] {
    for (let i = 0; i < numbers.length; i++) {
        let tmp = a[i];
        let k = i;
        for (var j = i - 1; j >= 0; j--) {

            if (numbers[j] > tmp) {
                a[j + 1] = a[j];
            } else {
                break;
            }

        }

        // let tmp = a[i];
        a[j + 1] = tmp;

    }
    return numbers
}

let a = [10, 3, 1, 4, 2];
let result = insertionSort(a);
console.log(result);

export { insertionSort }