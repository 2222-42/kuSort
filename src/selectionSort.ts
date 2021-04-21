function selectionSort(numbers: number[]): number[] {
    for (let i = 0; i < numbers.length; i++) {
        let min = numbers[i];
        let k = i;
        for (let j = i + 1; j < numbers.length; j++) {

            if (numbers[j] < min) {
                min = numbers[j];
                k = j;
            }

        }

        let tmp = numbers[i];
        numbers[i] = numbers[k];
        numbers[k] = tmp;
    }
    return numbers
}

let a = [10, 3, 1, 4, 2];
let result = selectionSort(a);
console.log(result);

let b = [10, 3, 1, 9, 6, 8, 2, 4, 5];
let resultB = selectionSort(b);
console.log(resultB);


export { selectionSort };