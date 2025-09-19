const student ={
    name:"xyz",
    course:"btech",
    branch :"cs",
    section:"C",
    phoneNo:{
        phoneNo1 :7878787878,
        phoneNo2:8272828282,

    },
    address:{
        hno :45,
        street:"birla colony",
        city :"patna",
        state:"bihar"
    }

}
console.log(student.name);
console.log(student['name']);
let X ='name'
console.log(student[x]);

function modifyStudent(obj){
 obj.name ="abc"
}
modifyStudent(student)
console.log(student.name);
console.log(student['name']);


