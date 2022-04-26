let tableData1=""; 
let tableheader="";
function load(){  
let title=document.getElementById("title") 
title.textContent="Storing data"     
fetch("https://jsonplaceholder.typicode.com/posts").then((data)=>{
return data.json();  
}).then((objectData)=>{
console.log(objectData[0].title);
let tableData="";
tableheader+= `
<tr>
<th>id</th>
<th onclick="sort()">userId</th>
<th>title</th>
<th>body</th>
</tr>`
document.getElementById("text").innerHTML=tableheader;
objectData.map((values)=>{
 tableData+= `<tr>
 <td><a href="#" onclick="test(${values.id})">${values.id}</a></td>
 <td>${values.userId}</td>
<td>${values.title}</td>
<td>${values.body}</td>
<tr>`
tableData1=tableData;
//document.getElementById("table_body").innerHTML=tableData;
});
document.getElementById("remove").innerHTML="";
document.getElementById("text").innerHTML=tableheader;
document.getElementById("table_body").innerHTML=tableData;

});}

function test(k){
console.log(k);
fetch("https://jsonplaceholder.typicode.com/posts/"+k+"").then((data)=>{
return data.json(); 
}).then((objectData)=>{
console.log(objectData);
let tableData="";
tableData+= `
<tr>

 <td>${objectData.id}</td>
 <td>${objectData.userId}</td>
<td>${objectData.title}</td>
<td>${objectData.body}</td>
<tr>`
document.getElementById("table_body").innerHTML=tableData;
});
let back1 = document.getElementById("dummy");
let btn = `<h1  onclick="back()">back</h1>`
back1.innerHTML=btn;
}
function back(){
console.log("test")
document.getElementById("table_body").innerHTML=tableData1;
let back1 = document.getElementById("dummy")
back1.innerHTML="";
}


