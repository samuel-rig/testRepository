//students score, total possible score
//print you got a C!
//A 90-100, B 80-90, C 70-80, D 60-70, E 50-60, F 0-50

let getScore = function(studentScore, maxScore){
    let score = (studentScore * 100) / maxScore;
    let letterGrade = '';
    if(score >= 90){
        letterGrade = 'A';
    } else if(score >=80 && score<= 89){
        letterGrade = 'B';
    } else if(score >=70 && score<= 79){
        letterGrade = 'C';
    } else if(score >=60 && score<= 69){
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    return `You got a ${letterGrade} (${score}%)`;
}

let score = getScore(18, 20);
console.log(score);