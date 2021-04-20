function selectionSort(numbers: number[]): number[] {
    for (let i = 0; i < numbers.length; i++) {
        let min = a[i];
        let k = i;
        for (let j = i + 1; j < numbers.length; j++) {

            if (numbers[j] < min) {
                min = a[j];
                k = j;
            }

        }

        let tmp = a[i];
        a[i] = a[k];
        a[k] = tmp;
    }
    return numbers
}

let a = [10, 3, 1, 4, 2];
let result = selectionSort(a);
console.log(result);

export { selectionSort };