const add = document.querySelector("#add");
const add1 = document.querySelector("#add1");
const courseCode = document.querySelector("#coursecode");
const semnum = document.querySelector("#semnum");
const credits = document.querySelector("#credits");
const credits1 = document.querySelector("#credits1");
const gp = document.querySelector("#gp");
const gp1 = document.querySelector("#gp1");
const tbody = document.querySelector("#tbody");
const table = document.querySelector("#table");
const cgpa = document.querySelector("#cgpa");
const totcreds = document.querySelector("#totcreds");

let total=0;
let points=0;
let fin=0;

add.addEventListener("click",()=>{
    const tr = document.createElement("tr");
    const tdCourseCode = document.createElement("td");
    tdCourseCode.innerHTML = courseCode.value;
    const tdCredits = document.createElement("td");
    tdCredits.innerHTML = credits.value;
    const tdGrade = document.createElement("td");
    tdGrade.innerHTML = gp.value;
    tr.appendChild(tdCourseCode);
    tr.appendChild(tdCredits);
    tr.appendChild(tdGrade);
    tbody.appendChild(tr);
    total=total+parseInt(credits.value);
    points=points+parseInt(credits.value)*parseInt(gp.value);
    totcreds.innerHTML=total;
    fin=points/total;
    cgpa.innerHTML=fin.toFixed(2);
});

add1.addEventListener("click",()=>{
    const tr1 = document.createElement("tr");
    const tdCourseCode1 = document.createElement("td");
    tdCourseCode1.innerHTML = semnum.value;
    const tdCredits1 = document.createElement("td");
    tdCredits1.innerHTML = credits1.value;
    const tdGrade1 = document.createElement("td");
    tdGrade1.innerHTML = gp1.value;
    tr1.appendChild(tdCourseCode1);
    tr1.appendChild(tdCredits1);
    tr1.appendChild(tdGrade1);
    tbody.appendChild(tr1);
    total=total+parseInt(credits1.value);
    points=points+parseInt(credits1.value)*parseInt(gp1.value);
    totcreds.innerHTML=total;
    fin=points/total;
    cgpa.innerHTML=fin.toFixed(2);
});

totcreds.innerHTML=0;
cgpa.innerHTML=0;