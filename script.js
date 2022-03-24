function calcGrade() {
    for (i=0; i<3; i++) {
        getScores();
    }
}
  
function getScores() {
    if (i==0) {
        let req1 = parseInt(document.querySelector("#req1_1").value);
        let req2 = parseInt(document.querySelector("#req2_1").value);
        let req3 = parseInt(document.querySelector("#req3_1").value);

        getSum (req1, req2, req3);
    }
    else {
        if (i==1) {
            let req1 = parseInt(document.querySelector("#req1_2").value);
            let req2 = parseInt(document.querySelector("#req2_2").value);
            let req3 = parseInt(document.querySelector("#req3_2").value);
    
            getSum (req1, req2, req3);
        }
        else {
            let req1 = parseInt(document.querySelector("#req1_3").value);
            let req2 = parseInt(document.querySelector("#req2_3").value);
            let req3 = parseInt(document.querySelector("#req3_3").value);
    
            getSum (req1, req2, req3);
        }
    }
}

function getSum(r1, r2, r3) {
    let sum = r1 + r2 + r3;

    getPercent(sum);
}

function getPercent(sum) {
    const HPS = 20 + 30 + 50;
    let percentage = sum / HPS * 100;

    getTenta(percentage);
}

function getTenta(p) {
    if (p >= 96) {
        p = 1.00;
    }
    else {
        if (p >= 90) {
            p = 1.25;
        }
        else {
            if (p >= 84) {
                p = 1.50;
            }
            else {
                if (p >= 78) {
                    p = 1.75;
                }
                else {
                    if (p >= 72) {
                        p = 2.00;
                    }
                    else {
                        if (p >= 66) {
                            p = 2.25;
                        }
                        else {
                            if (p >= 60) {
                                p = 2.50;
                            }
                            else {
                                if (p >= 55) {
                                    p = 2.75;
                                }
                                else {
                                    if (p >= 50) {
                                        p = 3.00;
                                    }
                                    else {
                                        if (p >= 40) {
                                            p = 4.00;
                                        }
                                        else {
                                            p = 5.00;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    calcFinal(p);
}

function calcFinal(tenta) {
    if (i==0) {
        let prev1 = parseInt(document.querySelector("#prev1").value);
        var final1 = (2/3 * tenta) + (1/3 * prev1);
        transmutation(final1);      
    }
    else {
        if (i==1) {
            let prev2 = parseInt(document.querySelector("#prev2").value);
            var final2 = (2/3 * tenta) + (1/3 * prev2);
            transmutation(final2);
        }
        else {
            let prev3 = parseInt(document.querySelector("#prev3").value);
            var final3 = (2/3 * tenta) + (1/3 * prev3);
            transmutation(final3);
        }
    }
}

function transmutation(grade) {
    if ((1.00 <= grade)&&(grade <= 1.125)){ 
        grade = 1.00;
    }
    else { 
        if ((1.125 < grade)&&(grade <= 1.375)) {
            grade = 1.25;
        } 
        else { 
            if ((1.375 < grade)&&(grade<= 1.625)) {
                grade = 1.50;
            } 
            else { 
                if ((1.625 < grade)&&(grade <= 1.875)) {
                    grade = 1.75;
                } 
                else { 
                    if ((1.875 < grade)&&(grade<= 2.125)) {
                        grade = 2.00;
                    } 
                    else { 
                        if ((2.125 < grade)&&(grade <= 2.375)) {
                            grade = 2.25;
                        } 
                        else { 
                            if ((2.375 < grade)&&(grade <= 2.625)) {
                                grade = 2.50;
                            } 
                            else { 
                                if ((2.625 < grade)&&(grade <= 2.875)) {
                                    grade = 2.75;
                                } 
                                else { 
                                    if ((2.875 < grade)&&(grade <= 3.5)) {
                                        grade = 3.00;
                                    } 
                                    else { 
                                        if ((3.5 < grade)&&(grade <= 4.5)) {
                                            grade = 4.00;
                                        } 
                                        else { 
                                            if ((4.5<grade)&&(grade<=5)); {
                                                grade = 5.00;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
  
    getAve(grade);
}

function getAve(grade) {
     if (i==0) {
        ave = grade;
        document.getElementById("grade1").innerHTML = "Subject 1: " + Number(grade).toFixed(2);
    }
    else {
        if (i==1) {
            ave += grade;
            document.getElementById("grade2").innerHTML = "Subject 2: " + Number(grade).toFixed(2);
        }
        else {
            if (i==2) {
                ave = (ave + grade) / 3;
                document.getElementById("grade3").innerHTML = "Subject 3: " + Number(grade).toFixed(2);
                document.getElementById("ave").innerHTML = "Average Grade: " + Number(ave).toFixed(2);
                title();
            }
        }
    }
}

function title() {
    let name = document.querySelector("#name").value;
    let secCn = document.querySelector("#secCn").value;  
    document.getElementById("title").innerHTML = secCn + " " + name + "'s Quarterly Grades";
}

  
