
const endDate = '21 February 2024 02:52 PM';

document.getElementById('endDate').innerText = endDate;

const input = document.querySelectorAll('input');


// Calculation part 

function clock (){
   const end = new Date(endDate);
   const currentDate = new Date ();
   const diff = end - currentDate; // get mili seconds
   const seconds = (end - currentDate) / 1000;
   if(seconds < 0){
    return;
   }
   // convert into days
   const days = Math.floor(seconds / 3600 / 24);
   input[0].value = days;
   // convert into hours
   const hours = Math.floor(seconds / 3600) % 24;
   input[1].value = hours;
   // convert into minutes
   const minutes = Math.floor(seconds / 60) % 60;
   input[2].value = minutes;
   // convert into second
   const second = Math.floor(seconds) % 60;
   input[3].value = second;
   
}

clock();

setInterval(
    function(){
        clock();
    },
    1000
)
