function validate() {
    var x = document.forms["myform"]["fname"].value;
    if (x == "") {
        alert("First name must be filled out");
        return false;
    }

    x = document.getElementById("fname").value;
    if (x.length < 3 || x.length > 10) {
        alert("First name character range between 3 & 10");
        return false;
    }
    var fname = document.getElementById('fname').value;
    document.getElementById('Sfname').innerHTML = "<b></b> " + fname;


    var y = document.forms["myform"]["lname"].value;
    if (y == "") {
        alert("Last name must be filled out");
        return false;
    }

    y = document.getElementById("lname").value;
    if (y.length < 3 || y.length > 10) {
        alert("Last name character range between 3 & 10");
        return false;
    }
    var lname = document.getElementById('lname').value;
    document.getElementById('Slname').innerHTML = "<b></b> " + lname;


    var z = document.forms["myform"]["email"].value;
    if (z == "") {
        alert("Email must be filled out");
        return false;
    }

    z = document.getElementById("email").value;
    if (z.length < 6 || y.length > 120) {
        alert("Email character range between 6 & 120");
        return false;
    }
    var email = document.getElementById('email').value;
    document.getElementById('Semail').innerHTML = "<b></b> " + email;


    var a = document.forms["myform"]["address"].value;
    if (a == "") {
        alert("Address must be filled out");
        return false;
    }

    a = document.getElementById("address").value;
    if (a.length < 5 || a.length > 500) {
        alert("Address character range between 3 & 10");
        return false;
    }
    var address = document.getElementById('address').value;
    document.getElementById('Saddress').innerHTML = "<b></b> " + address;


    var sub = document.getElementsByName('check');
    var selected_check = "";
    for (var i = 0; i < sub.length; i++) {
        if (sub[i].type == 'checkbox' && sub[i].checked == true)
            selected_check += sub[i].value + ", ";
    }
    document.getElementById('Ssubject').innerHTML = "<b> </b> " + selected_check;

    var phnum = document.getElementById('phnum').value;
    document.getElementById('Sphnum').innerHTML = "<b> </b> " + phnum;

    var course = document.getElementById('course').value;
    document.getElementById('Scourse').innerHTML = "<b></b> " + course;  

    var time = document.getElementById('time').value;
    document.getElementById('Stime').innerHTML = "<b></b> " + time;  
    

    var date = document.getElementById('date').value;
    document.getElementById('Sdate').innerHTML = "<b></b> " + date;
    return false;
} 