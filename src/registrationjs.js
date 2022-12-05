
var data = []

function Signin() {


    //mr-mrs

    var ele = document.getElementsByName("inlineRadioOptions")
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            // document.getElementById("textname18").innerHTML = ele[i].value;
            data.push(`<legend> Employee Details </legend>Full Name :${ele[i].value}.`)
        }
    }

//firstname

    var Firstname = document.getElementById("Firstname").value;
    var validation = /^[A-Za-z]+$/
    if (!Firstname.match(validation)) {
        alert("Invalid FirstName ");
    }
    else {
       
        data.push(`${Firstname}&nbsp`)
        

    }



//middlename
    var Middlename = document.getElementById("Middlename").value;

    if (!Middlename.match(validation)) {
        alert("Invalid Middlename");
    }
    else {
     
        data.push(`${Middlename}&nbsp`)
       
    }
//lastname
    var Lastname = document.getElementById("Lastname").value;

    if (!Lastname.match(validation)) {
        alert("Invalid Lastname");
    }
    else {
       
        data.push(`${Lastname}<br>`)
       
    }


    var Emailadd1 = document.getElementById("inputEmail5").value;
    let validation1 = /^[a-z0-9]+[@]{1}[a-z]+[.][a-z]{3}$/;
    if (!Emailadd1.match(validation1)) {
        alert("Invalid EmailId")
    }
    else {
       
        data.push(`Email Addreess 1:${Emailadd1}<br>`)
       
    }


    var Emailadd2 = document.getElementById("inputEmail4").value;

    if (!Emailadd2.match(validation1)) {
        alert("Invalid EmailId")
    }
    else {
        
        data.push(`Email Addreess 2:${Emailadd2}<br>`)
       
    }




    var add1 = document.getElementById("inputAddress1").value;
    let validation2 = /^[A-Z \,0-9a-z]{1,100}$/;
    if (!add1.match(validation2)) {
        alert("Invalid Address1")
    }
    else {
      
        data.push(`Permanent Address:${add1}<br>`)
       
    }



    var add2 = document.getElementById("inputAddress2").value;

    if (!add2.match(validation2)) {
        alert("Invalid Address2")
    }
    else {
        
        data.push(`Temporary Address:${add2}<br>`)
       
    }



    var city1 = document.getElementById("inputCity1").value;
    let validation3 = /^[A-Za-z]{1,10}$/;
    if (!city1.match(validation3)) {
        alert("Invalid City Name")
    }
    else {
     
        data.push(`Permanent City:${city1}<br>`)
       
    }



    var city2 = document.getElementById("inputCity2").value;

    if (!city2.match(validation3)) {
        alert("Invalid City Name")
    }
    else {
       
        data.push(`Temporary City:${city1}<br>`)
       
    }



    var select1 = document.getElementById("inputState1").value
   
    data.push(select1);
    var select2 = document.getElementById("inputState2").value
    data.push(select2);




    var zip1 = document.getElementById("inputZip").value;
    let validation4 = /^[0-9]{6}$/;
    if (!zip1.match(validation4)) {
        alert("Invalid City Name")
    }
    else {
        data.push(zip1);
    }

    var zip2 = document.getElementById("inputZip2").value;

    if (!zip2.match(validation4)) {
        alert("Invalid City Name")
    }
    else {
        data.push(zip2);
    }




    var check = document.getElementById("gridCheck").checked;
    if (!check == true) {
        alert("Please tick on Check me out")
    }

// radio
    var check = (document.getElementById("inlineRadio1").checked) || (document.getElementById("inlineRadio2").checked) || (document.getElementById("inlineRadio3").checked) || (document.getElementById("inlineRadio4").checked) || (document.getElementById("inlineRadio5").checked);



    if (!check == true) {
        alert("Please select Gender")
    }
    // else(
    //     document.getElementById("textname12").innerHTML
    //    )


   



    var str = "";
    data.forEach((entry, index) => {

        // str = str + entry + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"<button onclick=clr(" + index + ") >X</button><br>"
        str = str + entry ;
    })
    document.getElementById("list").innerHTML = str;





}
function clr(index) {
    data.splice(index, 1);
    let str = "";
   
    data.forEach((entry, index) => {

        // str = str + entry + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +"<button onclick=clr(" + index + ")>X</button><br>"
        str = str + entry ;
    })
    document.getElementById("list").innerHTML = str;


}
// function delet(index){
//     input.splice(index,1);
//     let str=""
//      input.forEach((x,index)=>{
//          str=str+x+"<button onclick=delet("+index+")>x</button></br>"}) ;
//          document.getElementById("mylist").innerHTML=str;
    
//  }
function Resetnow() {

    document.getElementById("Firstname").value = ""
    document.getElementById("Lastname").value = ""
    document.getElementById("Middlename").value = ""
    document.getElementById("inputEmail5").value = ""
    document.getElementById("inputEmail4").value = ""
    document.getElementById("inputAddress1").value = ""
    document.getElementById("inputAddress2").value = ""
    document.getElementById("inputCity1").value = ""
    document.getElementById("inputCity2").value = ""
    document.getElementById("inputZip").value = ""
    document.getElementById("inputZip2").value = ""
    document.getElementById("gridCheck").checked = ""
    document.getElementById("inputState2").value = ""
    document.getElementById("inputState1").value = ""
    document.getElementById("inlineRadio1").checked = ""
    document.getElementById("inlineRadio2").checked = ""
    document.getElementById("inlineRadio3").checked = ""
    document.getElementById("inlineRadio4").checked = ""
    document.getElementById("inlineRadio5").checked = ""
    // document.getElementById("textname1").innerHTML = ""
    // data.splice(data)
    document.getElementById("list").innerHTML=""



}
function copyadd() {
    if (checkbox123.checked) {
        document.getElementById("inputAddress2").value = document.getElementById("inputAddress1").value
        document.getElementById("inputEmail4").value = document.getElementById("inputEmail5").value
        document.getElementById("inputCity2").value = document.getElementById("inputCity1").value
        document.getElementById("inputState2").value = document.getElementById("inputState1").value
        document.getElementById("inputZip2").value = document.getElementById("inputZip").value



    }

    else (document.getElementById("inputAddress2").value = "",
        document.getElementById("inputEmail4").value = "",
        document.getElementById("inputCity2").value = "",
        document.getElementById("inputState2").value = "",
        document.getElementById("inputZip2").value = ""

    )
}
