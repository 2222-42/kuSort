// バブルソート
let bFirstStep = 0;
let bSecondStep = 0;

function kusoBubbleSortSub(numbers: number[]) {
    // console.log("bubble");
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

// シェルソート
let shlStep: number;
let shlSecondStep: number;
let shlThirdTmp: number;

function kusoShellSortSub(numbers: number[]) {
    // console.log("shell");
    let i = shlSecondStep
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

// 挿入ソート
let iFirstStep = 0;

function kusoInsertionSortSub(numbers: number[]) {
    // console.log("insert");
    let tmp = numbers[iFirstStep];
    let k = iFirstStep;
    for (var j = iFirstStep - 1; j >= 0; j--) {

        if (numbers[j] > tmp) {
            numbers[j + 1] = numbers[j];
        } else {
            break;
        }

    }

    // let tmp = a[i];
    numbers[j + 1] = tmp;
    iFirstStep++
}


// セレクトソート
let slctFirstStep = 0;

function kusoSelectionSortSub(numbers: number[]) {
    // console.log("select");
    let min = numbers[slctFirstStep];
    let k = slctFirstStep;
    for (let j = slctFirstStep + 1; j < numbers.length; j++) {

        if (numbers[j] < min) {
            min = numbers[j];
            k = j;
        }

    }

    let tmp = numbers[slctFirstStep];
    numbers[slctFirstStep] = numbers[k];
    numbers[k] = tmp;
    slctFirstStep++;
}

// main
function init(numbers: number[]) {
    slctFirstStep = 0;
    bFirstStep = 0;
    bSecondStep = 0;
    iFirstStep = 0;
    shlStep = (numbers.length / 2 | 0);
    shlSecondStep = shlStep;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function kuSort(numbers: number[]) {
    init(numbers);
    let randomInt: number;
    while ((shlStep > 0) && (bFirstStep < numbers.length) &&
        (iFirstStep < numbers.length) && (slctFirstStep < numbers.length)) {
        randomInt = getRandomInt(4);
        switch (randomInt) {
            case 0:
                if (bFirstStep < numbers.length) {
                    kusoBubbleSortSub(numbers);
                }
                break;
            case 1:
                if (shlStep > 0) {
                    kusoShellSortSub(numbers);
                }
                break;
            case 2:
                if (iFirstStep < numbers.length) {
                    kusoInsertionSortSub(numbers);
                }

                break;
            case 3:
                if ((slctFirstStep < numbers.length)) {
                    kusoSelectionSortSub(numbers);
                }

                break;
            default:
                break;
        }
    }
}

let array = [];
let max = 1000;
let length = 50
for (let i = 0; i < length; i++) {
    array.push(getRandomInt(max));
}

console.log(array)

let a = array;
kuSort(a);
console.log(a);

export { };