"use strict"
 const date =new Date();
 const months=["January","february","March","April","May","June","July","August","September","October","November","December"];
 const days=["Sunday","Monday","Tuersday","WednesDay","Thursday","Friday","Saturday"]

 var calender=(month)=>{
   var current_year=date.getFullYear();
   var currentdayindex=date.getDay();
  
   let firstday_index__of_cuttent_month=new Date(current_year,current_monthindex,1).getDay();
   let lastdaycurrentmonth=new Date(current_year,current_monthindex+1,0).getDate();
   let premontlastdate=new Date(current_year,current_monthindex,0).getDate();
 }
 
 var currentdayindex=date.getDay();
 var currentdayname=days[date.getDay()];
 var currentdate=date.getDate();
 var current_monthindex=date.getMonth();
 var current_month_name=months[date.getMonth()];
 var current_year=date.getFullYear();
 let firstday_index__of_cuttent_month=new Date(current_year,current_monthindex,1).getDay();
 let lastdaycurrentmonth=new Date(current_year,current_monthindex+1,0).getDate();
 let premontlastdate=new Date(current_year,current_monthindex,0).getDate();

// next month
 var nextbtn=document.querySelector(".next");
 nextbtn.addEventListener("click",()=>{
    current_monthindex+=1;
    dateshedule.innerHTML="";
    
 });




var dateshedule=document.querySelector(".date");
 var dates=" ";

 // pre month
 for(let x=firstday_index__of_cuttent_month;x>0;x--){
    dates+= `<div class="prev_date">${premontlastdate-x+1}</div>` ;
}
//current month
for (let index =1; index <=lastdaycurrentmonth; index++) {
    if(index==currentdate){
        dates+=`<div class="current">${index}</div>`;
    }else{
        dates+=`<div>${index}</div>`;
    }
    

 }
//  // next month
 for (let index =1; index <firstday_index__of_cuttent_month; index++) {
    dates+=`<div class="next_date">${index}</div>`;
 }
 dateshedule.innerHTML=dates;
 dates="";

document.querySelector(".current_month h2").innerHTML=current_month_name;
document.querySelector(".current_month h4").innerHTML=`${currentdayname} ${currentdate} ${current_month_name} ${current_year}`;
 
