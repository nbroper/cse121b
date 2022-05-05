// const steps = ['one', 'two', 'three'];
// const stepsHtml = steps.map(function(step) {
//     return `<li>${step}</li>`;
// });
// document.getElementById("myList").innerHTML = stepsHtml.join()

// let new_array = arr.map(function callback(currentValue[, index[, array]]) {
//     // return element for new_array
//     listElement.innerHTML += `<li>${item}</li>`;
// }[, thisArg])

const grades = ['A', 'B', 'A']

function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints);