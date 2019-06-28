/* 
    此為select 物件操作

    ex: select id = st

        st.options              選單選項
        st.options.length       項目總數
        st.options[index].text  項目中第 index 個選項中的文字內容
        st.options[index].value 項目中第 index 個選項中的值
        st.options.selectedIndex 被選的項目索引值

        取出被索引的內容：
            st.options[st.options.selectedIndex].text
        刪除被索引的項目
            st.options[st.options.selectedIndex] = null
        新增項目
            st.options[st.options.length] = new Option(text,value)
*/

function deleteOption(list){
    var index=list.selectedIndex;
    console.log(list);
    if(index>=0)
        list.options[index]=null;
    else
        alert("無反白選項！");
}

function addOption(list,text,value){
    var index=list.options.length;
    list.options[index]=new Option(text,value);
    list.selectedIndex=index;
}

department=new Array();
department[0]=["a1","a2","a3","a4","a5"];
department[1]=["b1","b2","b3","b4","b5"];
department[2]=["c1","c2","c3","c4","c5"];
department[3]=["d1","d2","d3","d4","d5"];

function renew(index){
    for(var i=0; i<department[index].length;i++)
        document.myForm.member.options[i]=new Option(department[index][i],department[index][i]);
    document.myForm.menber.length=department[index].length;
}