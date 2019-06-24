/*
    JS sample with html document
        document: 寫入html標準屬性
            .write() ：此為method, 內容將會直接被寫入。
*/

var a=100,b=200;
var c=a+b;
var now=new Date();
var h=now.getHours();
var m=now.getMonth()+1;
var d=now.getDate();
var w=now.getDay();

document.write("JS Output<br><hr>");
document.write("a+b=",c,"<br><hr>");
if(h>=9 && h<=18)
    document.write("Wellcome 上班時間。<br>");
else
    document.write("Tanks， 明天請早。")
/*
    JS message dialog
*/
confirm("JS Output\nAns:a+b="+c);
alert("JS Output\nAns:a+b="+c);

function chkW(wNum){
    switch(wNum){
        case 1:
            document.write("Today is Mon<br><hr>");
            break;
        case 2:
            document.write("Today is Tue<br><hr>");
            break;
        case 3:
            document.write("Today is Wed<br><hr>");
            break;
        case 4:
            document.write("Today is Thu<br><hr>");
            break;
        case 5:
            document.write("Today is Fri<br><hr>");
            break;
        case 6:
            document.write("Today is Sat<br><hr>");
            break;
        case 7:
            document.write("Today is Sun<br><hr>");
            break;  
    }
}

function con(num){
    var str="一二三四五六七八九";
    if(num==0)
        num="日";
    else if(num<10)
        num=str.charAt(num-1);
    else if(num<20)
        num="十"+str.charAt(num-11);
    else if(num<30)
        num="二十"+str.charAt(num-21);
    else
        num="三十"+str.charAt(num-31);
    return num;
}

chkW(w);
document.write("今天是",con(m),"月",con(d),"日，星期",con(w));



