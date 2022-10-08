"use strict"
 const date =new Date();
 const months=["January","february","March","April","May","June","July","August","September","October","November","December"];
 const days=["Sunday","Monday","Tuersday","WednesDay","Thursday","Friday","Saturday"]

 var current_month_name=months[date.getMonth()];
 var currentdayindex=date.getDay();
 var currentdate=date.getDate();
 var current_monthindex=date.getMonth();
 var current_year=date.getFullYear();
 let firstdaycurrentmonthindex=new Date(current_year,current_monthindex,1).getDay();
 
 let lastdaycurrentmonth=new Date(current_year,current_monthindex+1,0).getDate();
 let premontlastdate=new Date(current_year,current_monthindex,0).getDate();
 
var dateshedule=document.querySelector(".date");
console.log(dateshedule)
 var dates=" ";

 // pre month
 for(let x=firstdaycurrentmonthindex;x>0;x--){
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
 for (let index =1; index <firstdaycurrentmonthindex; index++) {
    dates+=`<div class="next_date">${index}</div>`;
 }
 dateshedule.innerHTML=dates;
console.log(dateshedule);
 dates="";

 
