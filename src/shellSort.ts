let shlStep: number;
let shlSecondStep: number;
let shlThirdTmp: number;

function quasiShellSortSub(numbers: number[]) {
    let i = shlSecondStep
    console.log(numbers);
    if (i < numbers.length) {
        shlThirdTmp = numbers[i];

        for (var j = i; j >= shlStep; j -= shlStep) {
            if (numbers[j - shlStep] > shlThirdTmp) {
                numbers[j] = numbers[j - shlStep];
            } else {
                break;
            }
        }

        numbers[j] = shlThirdTmp;
        shlSecondStep++;
    } else {
        shlStep = (shlStep / 2 | 0);
        shlSecondStep = shlStep
    }
}

function quasiShellSort(numbers: number[]): number[] {
    shlStep = (numbers.length / 2 | 0);
    shlSecondStep = shlStep;
    while (shlStep > 0) {
        quasiShellSortSub(numbers);
    }

    return numbers
}

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

let aa = [10, 3, 1, 4, 2];
let resultAA = quasiShellSort(aa);
console.log(aa);

shlStep = 0;
shlSecondStep = 0;
let bb = [10, 3, 1, 9, 6, 8, 2, 4, 5];
let resultBB = quasiShellSort(bb);
console.log(bb);

export { shellSort }