
function shellSort(numbers: number[]): number[] {
    for (let step = (numbers.length / 2 | 0); step > 0; step = (step / 2 | 0)) {
        for (let i = step; i < numbers.length; i++) {
            let tmp = numbers[i];

            for (var j = i; j >= step; j -= step) {

                if (numbers[j - step] > tmp) {
                    numbers[j] = numbers[j - step];
                } else {
                    break;
                }

            }

            numbers[j] = tmp;

        }

    }

    return numbers
}

let a = [10, 3, 1, 4, 2];
let b = [10, 3, 1, 9, 6, 8, 2, 4, 5];
let resultA = shellSort(a);
console.log(resultA);
let resultB = shellSort(b);
console.log(resultB);



export { shellSort }