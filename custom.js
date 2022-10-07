"use strict"
 const date =new Date();
 const months=["January","february","March","April","May","June","July","August","September","October","November","December"];
 const days=["Sunday","Munday","Tuesday","WednesDay","THirsday","Friday","Saturday"]
 const current_month=months[date.getMonth()];
 const fulldate=`${days[date.getDay()]},${current_month} ${date.getDate()} ${date.getFullYear()}`;