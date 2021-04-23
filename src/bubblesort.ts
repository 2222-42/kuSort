let bFirstStep = 0;
let bSecondStep = 0;

function quasibBubbleSort(numbers: number[]) {
    while (bFirstStep < numbers.length) {
        let j = numbers.length - (bSecondStep + 1)
        if (j > bFirstStep) {
            for (; j > bFirstStep; j--) {
                bSecondStep++;
                if (numbers[j] < numbers[j - 1]) {
                    let temp = numbers[j];
                    numbers[j] = numbers[j - 1];
                    numbers[j - 1] = temp;
                    break;
                }
            }
        } else {
            bSecondStep = 0;
            bFirstStep++;
        }
    }
}

function bubbleSort(numbers: number[]): number[] {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = numbers.length - 1; j > i; j--) {
            if (numbers[j] < numbers[j - 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j - 1];
                numbers[j - 1] = temp;
            }
        }
    }
    return numbers
}

let a = [10, 3, 1, 4, 2];
let resultA = bubbleSort(a);
console.log(resultA);

let b = [10, 3, 1, 9, 6, 8, 2, 4, 5];
let resultB = bubbleSort(b);
console.log(resultB);

let aa = [10, 3, 1, 4, 2];
let resultAA = quasibBubbleSort(aa);
console.log(aa);

bFirstStep = 0;
bSecondStep = 0;
let bb = [10, 3, 1, 9, 6, 8, 2, 4, 5];
let resultBB = quasibBubbleSort(bb);
console.log(bb);

export { bubbleSort, quasibBubbleSort }