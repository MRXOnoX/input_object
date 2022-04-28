class Student{
    constructor(fname,lname,age,course,faculty){
        this.fname = fname
        this.lname = lname
        this.age = age
        this.course = course
        this.faculty = faculty
        this.point1 = parseInt(Math.random()*100)
        this.point2 = parseInt(Math.random()*100) 
        this.point3 =  parseInt(Math.random()*100);
        this.avg = (this.point1 + this.point2 + this.point3)/3;
        (this.point1+this.point2+this.point3)/3>50 ? this.status = "Succes" : this.status = "Fail"
    }
}
var firstame = document.querySelector(".fname")
var lastame = document.querySelector(".lname")
var age = document.querySelector(".age")
var sel = document.querySelector(".sel")
var sel1 = document.querySelector(".sel1")
var save = document.querySelector(".save")
var tb = document.querySelector(".tb")
var arr = []
save.addEventListener("click",function(){
    tb.innerHTML = ""
    tb.innerHTML = `
    <table class="tb">
    <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
        <th>Course</th>
        <th>Faculty</th>
        <th>Point1</th>
        <th>Point2</th>
        <th>Point3</th>
        <th>Status</th>
   
    </tr>
    `
    var obj = new Student(firstame.value,lastame.value,age.value,sel1.value,sel.value)
    arr.push(obj)
    for(var i of arr){
        var tmp = `
        <tr>
        <td>${i.fname}</td>
        <td>${i.lname}</td>
        <td>${i.age}</td>
        <td>${i.course}</td>
        <td>${i.faculty}</td>
        <td>${i.point1}</td>
        <td>${i.point2}</td>
        <td>${i.point3}</td>
        <td>${i.status}</td>
    </tr>
        `
        tb.innerHTML += tmp
      var newarr =   arr.sort(function(a,b){
            return b.avg - a.avg
        })
        console.log(newarr[0].avg,newarr[0].point1,newarr[0].point2,newarr[0].point3)
    }
})

