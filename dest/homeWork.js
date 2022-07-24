"use strict";
// function bigThenTean(test:number){
//     let num:number=test;
//     if(num>10){
//         return console.log(`nume${num} is gretter then 10`)
//     }
//     else
//    return  console.log(`nume${num} is less then 10`)
// }
// bigThenTean(50)
// function equalThenTean(test2:number){
//     let num:number=test2;
//     if(num>10){
//          console.log(`nume${num} is gretter then 10`)
//     }
//     else if(num<10){
//          console.log(`nume${num} is less then 10`)
//     }
//     else
//     console.log(`nume${num} is equal to 10`)
// }
// function whoBigger(num1:number,num2:number){
//     if(num1>num2){
//         console.log(num1+"bigger")
//     }
// else if(num1<num2){
//     console.log(num2+"bigger")
// }
// else
// console.log("values are equals")
// }
// //4
// function getMinNumber(num1:number,num2:number):Number{
//     if(num1>num2){
//       return num2;
//     }
//     else{
//       return num1
//     }
//   }
//   console.log(getMinNumber(10,50))
// //5
// function getMinNumber2(num1:number,num2:number,num3:number):Number{
//     if(num1<num2&&num1<num3){
//       return num1;
//     }
//     else if(num2<num1&&num2<num3){
//       return num2
//     }
//     else
//     return num3
//   }
//   //7
//   console.log(getMinNumber2(86,50,20))
//   function avrage (num1:number,num2:number,num3:number):Number{
//     let sum=num1+num2+num3
//     return sum/3
//     }
//     console.log(avrage(10,10,10));
// //8
// function sumall (num1:number,num2:number,num3:number,num4:number):Number{
//     let sum=num1+num2+num3+num4
//     return sum
//     }
//     console.log(sumall(4,5,8,9));
//     //9
//     function avg(array:number[]):Number{
//         let sum:number=0;
//         array.forEach(item=>{
//         sum+=item;
//         })
//         return sum/array.length
//         }
//         const array1:number[]=[1,10,12,34,45,6]
//         console.log(avg(array1))
// //10
// function sum (array:number[]):Number{
//     let sum:number=0;
//     array.forEach(item=>{
//     sum+=item;
//     })
//     return sum
//     }
//     const array1:number[]=[1,10,12,34,45,6]
//     console.log(avg(array1))
//11
//12
// function nameA (array:string[]):String{
//     let savee:string;
//     array.forEach(item=>{
//     if(item.charAt(0)=="A"){
//         savee=item
//     }
//     })
//     return savee;
//     }
//     const array1:string[]=["avi","Aaime","jakon","mir"]
//     console.log(nameA(array1))
//13
// function positiv (array:number[]):void{
//     let counter:number=0;
// array.forEach(item=>{
// if(Math.round(item)%2==0){
// counter++}
// })
// if(counter>0){
//     return "yess"
// }
// }
// const array1:number[]=[7.5,4.6,8.9,]
// console.log(positiv(array1))
//14
// function getDdate(strr:string):String{
//     let today=new Date(strr)
//     return today;
//     }
//     console.log(getDdate("4/14/1999 08:48"))
//15
// function printxtime(strr:string,num:number):String{
//     for(let i=0;i<num;i++){
//     console.log(strr)
//     }
//     }
//     printxtime("hekooo",8)
//16
// function welcom(strr:string,num:number):any{
//     if(num>18){
//      return   console.log("welcom "+strr)
//     }
//     }
//     welcom("hekooo",88)
// //17
// function Sameword(strr:string,strr2:string):any{
//     if(strr.charAt(0).toLowerCase()==strr2.charAt(0).toLowerCase()){
//     return strr2.charAt(0)
//     }
//     else
//     return "no"
//     }
//     console.log(Sameword("Bvi","bmor"))
//18
// function arryhasItems(strr:string[]){
//     switch(strr.length){
//         case 0:
//         return"empty"
//           case 1:
//        return "one"
//         ;
//           case 2:
//         return"two"
//         ;
//           case 3:
//     return"alot"
//     }
//     }
//     console.log(arryhasItems(["avi","a"]))
//19
// function arryOrder(num:number[] ,text:string):any{
//     switch(text){
//         case "reverse":
//         return num.reverse()
//           case "orderUp":
//        return num.sort((a,b)=>a-b)
//         ;
//           case "orderDown":
//         return num.sort((a,b)=>b-a)
//         ;
//               case "text":
//         return num.toString()
//     }
//     }
//     console.log(arryOrder([3,44,55,7,88,9],"text"))
//20
// function orederAny(arraya:any[]):any{
//     const array1:number[]=[]
//     const array2:string[]=[]
//     const array3:boolean[]=[]
//         arraya.forEach(item=>{
//     switch(typeof item){
//         case "number":
//         array1.push(item)
//     break
//         case "string":
//         array2.push(item)
//         break
//         case "boolean":
//         array3.push(item);
//     break
//     }
//         })
//        return array1.concat(array2,array3)
//     }
//     console.log(orederAny(["avi",7,8,"go",true]))
//21
// function fanmeAndLname(fname:string,lname?:string){
//     lname?console.log(`${fname} ${lname}`):console.log(`${fname}`)
//     }
//     fanmeAndLname("avi","aa")
//22
// function fullNameAndEmail(fullname:string,email?:String){
//     email?console.log(`${fullname} ${email}`):console.log(`${fullname}`)
// }
// fullNameAndEmail("moradd" ,"mko@")
//23
// function CatDetailes(age:number=0,typeOfcat:string,catName?:string){
//     catName?console.log(`${catName} ${age} ${typeOfcat}`):console.log(`${age} ${typeOfcat}`)
// }
// CatDetailes(42,"asian")
//24
// function textAndBoolean(text:string,isWaht:boolean=true):string{
//     return isWaht?`hello ${text}`:`welcome ${text}`
//  }
//  console.log(textAndBoolean("moti"))
//25
// function oneText(fname:string,lname:string="miss"):string{
//     return `${fname} ${lname}`
//  }
//  console.log(oneText("mor"))
//26
// function printText(text1:string,num:number=1,text2?:string){
//     for(let i=0;i<num;i++){
//      text2?  console.log(`${text1}\n ${text2}`): console.log(`${text1}`)
//     }
//  }
//  printText("moradsad",5,"adsdasdasdas")
//
// function manyLonleyChars(...cahrs:string[]){
//     cahrs?console.log(cahrs.sort()):console.log("emapty")
//     }
//     manyLonleyChars('f','g','o','a')
//28
// function manyNumber(...nums:number[]){
//     nums?console.log(nums.sort((a,b)=>a-b)):console.log("emapty")
//     }
//     manyNumber(4,5,8,12,3)
//29
// function manyNumber(...nums:number[]){
//     nums?console.log(nums.sort((a,b)=>b-a)):console.log("emapty")
//     }
//     manyNumber(4,5,8,12,3)
//34
// class vihicle{
//     company:string;
//     model:string;
//     color:string;
//     constructor(company:string,model:string,color:string){
//        this.company=company;
//        this.model=model;
//        this.color=color;
//     }
//  }
//35
// class elelpent{
//     height:string;
//     typeOfanimeal:string;
//     age:number;
//     country:string;
//     constructor(height:string,typeOfanimeal:string,age:number,country:string){
//        this.height=height;
//        this.typeOfanimeal=typeOfanimeal;
//        this.age=age;
//        this.country=country;
//     }
//     getDetails(){
//        return `${this.height} ${this.typeOfanimeal} ${this.age} ${this.country}`
//     }
//  }
//36
// class pants{
//     size:number=0
//     color:string=""
//     typeOffabric:string=""
//     height:number=0;
//     isavilbel:boolean=true;
//     constructor(size:number,color:string,typeOffabric:string,height:number,isavilbel:boolean){
//        this.size=size;
//        this.color=color;
//        this.typeOffabric=typeOffabric;
//        this.height=height;
//        this.isavilbel=isavilbel;
//     }
//     private getDetails(){ 
//        return `${this.size} ${this.color} ${this.typeOffabric} ${this.height} ${this.isavilbel}`
//     }
//  }
//37+38
// class Athlets{
//     fullName:string="";
//     birthday:string="";
//     branch:string="";
//     sex?:string="";
//  constructor(fullName:string,birthday:string,branch:string,sex?:string){
//     this.fullName=fullName;
//     this.birthday=birthday;
//     this.branch=branch;
//     this.sex=sex;
//  }
//  protected getDetailes(){
//     return `${this.fullName} ${this.birthday} ${this.branch} ${this.sex}`
//  }
// }
// class Fotballers extends Athlets{
// team:string="";
// isStatePlayers:boolean=true
//    constructor(fullName:string,birthday:string,branch:string,sex:string,team:string,isStatePlayers:boolean){
//       super(fullName,birthday,branch,sex)
//       this.team=team
//       this.isStatePlayers=isStatePlayers
//    }
//  protected getDetailes(){
//     return `${super.getDetailes()} ${this.team} ${this.isStatePlayers}`
//  }
//  printdetaile(){
//     return this.getDetailes();
//  }
// }
// const one=new Fotballers("avi hid","31/12","a1","male","hapoel",false);
// console.log(one.printdetaile())
//39
// class User{
//     fullname:string=""
//     age:number=0;
//  password:number=0
//  private isconaectd:boolean=true;
//  constructor(fullname:string,age:number,password:number){
//     this.fullname=fullname;
//     this.age=age;
//     this.password=password;
//  }
//  set setisconect(isonect:boolean){
//  this.isconaectd=isonect;
//  }
//  get getisconect():boolean{
//     return this.setisconect;
//  }
//  static olderUser(...ages:User[]){
//  let min=ages[0].age
//  let name:string=""
//  for(const i of ages){
//  if(min>i.age){
//     min=i.age
//  }
//  if(i.age==min){
//     name=i.fullname
//  }
//  }
//  console.log(min,name)
//  }
//  }
//  const one=new User("mori npp",75,4651324545)
//  const one1=new User("afi npp",15,4651324545)
//  const one2=new User("roman npp",4,4651324545)
//  const one3=new User("donald npp",36,4651324545)
//  one.setisconect=true
//  console.log(User.olderUser(one,one1,one2,one3))
//39
class User {
    constructor(fullname, age, password) {
        this.fullname = "";
        this.age = 0;
        this.password = 0;
        this.isconaectd = true;
        this.fullname = fullname;
        this.age = age;
        this.password = password;
    }
    get getisconect() {
        return this.isconaectd;
    }
    set setisconect(isonect) {
        this.isconaectd = isonect;
    }
    static olderUser(uuserChoise, ...ages) {
        if (uuserChoise == "young") {
            return ages.sort((a, b) => a.age - b.age)[0].fullname;
        }
        else if (uuserChoise == "old") {
            return ages.sort((a, b) => b.age - a.age)[0].fullname;
        }
        else
            return "no parametr";
    }
}
const one = new User("mori npp", 75, 4651324545);
const one1 = new User("afi npp", 15, 4651324545);
const one2 = new User("roman npp", 4, 4651324545);
const one3 = new User("donald npp", 36, 4651324545);
one.setisconect = true;
console.log(User.olderUser("young", one1, one2, one3, one));
//40
class Student extends User {
    constructor(age, password, fname, lname, email) {
        super(fname + lname, age, password);
        this.fname = "";
        this.lname = "";
        this.email = "";
        this.fname = fname;
        this.lname = lname;
        this.email = email;
    }
    gedetails() {
        return `${this.fullname} ${this.age} ${this.email}`;
    }
    ison() {
        if (this.getisconect) {
            return "green";
        }
        return "red";
    }
}
const student1 = new Student(12, 3123, "znavo", "ardai", "vcsjahc@f");
student1.setisconect = true;
console.log(student1.ison());
