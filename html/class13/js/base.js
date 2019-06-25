function ck(){
    var now=new Date();
    var h=now.getHours();
    var m=now.getMinutes();
    var s=now.getSeconds();

    if(h<=9)
        h="0"+h;
    if(m<=9)
        m="0"+m;
    if(s<=9)
        s="0"+s;
    /*
        document 為 window 物件中的一部分. 
        document選擇器的目標，會對應到 html tag 的 name type.
    */
    document.f1.t1.value=h+":"+m+":"+s;
    return [h,m,s];
}

function clock(){
    var now=ck();
    /*
        每間隔 1000ms 的時間執行一次 clock() -> 產生 loop
    */
    document.f2.t0.value=now[0]+":"+now[1]+":"+now[2];
    setTimeout("clock()",1000);
}

var dh=-1;
var dm=-1;
var ds=-1;
var end=new Date("January 01, 2020 00:00:00");
var dms=24*60*600*1000;
var hms=60*60*1000;
var sms=60*1000;
var ms=1000;

function clock_01(){
    var now=new Date();
    var hr=now.getHours();
    var mi=now.getMinutes();
    var se=now.getSeconds();
    var ch=dh;
    var cm=dm;
    var cs=ds;
    var difms=end.getTime()-now.getTime();
    dh=Math.floor(difms/dms);
    difms-=dh*dms;
    dm=Math.floor(difms/hms);
    difms-=dm*hms;
    ds=Math.floor(difms/sms);
    difms-=ds*sms;
    var dsec=Math.floor(difms/ms);
    if(ch!=dh) document.f2.d.value=dh;
    if(cm!=dm) document.f2.h.value=dm;
    if(cs!=ds) document.f2.m.value=ds;
    document.f2.s.value=dsec;
    setTimeout("clock_01()",1000);
}

var pimg = new Array(16);
for(i=0;i<16;i++){
    pimg[i]=new Image();
    pimg[i].src=i+".gif"
}
var tid=10;
function clock_02(){
    if(document.images){
        var ct=new Date();
        var h="0"+ct.getHours();
        var m="0"+ct.getMinutes();
        var s="0"+ct.getSeconds();

        h=h.substring(h.length-2, h.length+1);
        m=m.substring(m.length-2, m.length+1);
        s=s.substring(s.length-2, s.length+1);
        h1=h.substring(0,1);
        h2=h.substring(1,2);
        m1=h.substring(0,1);
        m2=h.substring(1,2);
        s1=h.substring(0,1);
        s2=h.substring(1,2);
        document.d0.src=h1+".gif";
        document.d1.src=h2+".gif";
        document.e0.src=m1+".gif";
        document.e1.src=m2+".gif";
        document.f0.src=s1+".gif";
        document.f1.src=s2+".gif";
        setTimeout('clock_02()',1000);
    }
}