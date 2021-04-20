
function bubbleSort(numbers: number[]): number[] {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = numbers.length - 1; j > i; j--) {

            if (numbers[j] < numbers[j - 1]) {
                let temp = numbers[j];
                a[j] = a[j - 1];
                a[j - 1] = temp;
            }

        }

    }
    return numbers
}

let a = [10, 3, 1, 4, 2];
let result = bubbleSort(a);
console.log(result);