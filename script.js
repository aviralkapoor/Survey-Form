function submitEmailForm(form){
    var obj = new XMLHttpRequest();
    obj.onreadystatechange = function(){
        if(obj.readyState == 4){
            if(obj.status == 200){
                var x = JSON.parse(obj.responseText);
                if(x.message=="True")
                {
                    var al=document.getElementsByClassName("al");
                    al[0].style.display="grid";
                    setTimeout(()=>{al[0].style.display="none";},3000);
                    setTimeout(()=>{location.reload(true)},3000);
                }
                else
                {
                    alert(x.message);
                }
            }
            else{
                alert("XMLHttp Status: "+obj.status+";"+obj.statusText);
            }
        }
    };
    obj.open("post",form.action,true);
    obj.setRequestHeader("Content-Type","application/json");
    obj.send(JSON.stringify({"fname":form.fname.value,"lname":form.lname.value,"regno":form.regno.value,"dept":form.dept.value,
    "email": form.email.value,"phn_num":form.phn_num.value,"gen":form.g.value,"month":form.month.value,
    "day":form.day.value,"year":form.year.value}));
    return false;
}