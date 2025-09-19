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
const newStudent= Object.assign({},student)
console.log(newStudent);
newStudent.section ="A";
newStudent.address.city ="noida"