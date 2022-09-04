      
		
		function start_mash() {
		document.getElementsByTagName("button")[0].innerHTML = "Restart Game";
			var player_name = prompt("Please enter your name");
			if (player_name != null) {
			document.getElementById("mash_title").innerHTML =
			player_name + "'s MASH";}
			document.getElementById("mash_house").style.display = "inline-block";
			

//player selection
		//Marriage
			
			document.getElementById("marriagetext").style.display = "inline-block";
			 love_choice1 = prompt("Pick a love interest")
				if (love_choice1 != null) {
					lc_list = document.getElementsByTagName("OL")[1];
					lc_list.getElementsByTagName("LI")[0].innerHTML = love_choice1;}
				
				if (love_choice1 != null) {love_choice2 = prompt("Pick a second love interest")}
				if (love_choice2 != null){
					lc_list.getElementsByTagName("LI")[1].innerHTML = love_choice2;}

				if (love_choice2 != null){love_choice3 = prompt("Pick a third love interest")}
				if (love_choice3 != null) {
					lc_list.getElementsByTagName("LI")[2].innerHTML = love_choice3;}
									
				if (love_choice3 != null) {love_choice4 = prompt ("Pick a fourth and final love interest")}
				if (love_choice4 != null) {
					lc_list.getElementsByTagName("LI")[3].innerHTML = love_choice4;};

			
				
		
//Occupation
			if (love_choice4 != null) {document.getElementById("occupationtext").style.display = "inline-block";
			 job_choice1 = prompt("Pick a job")};
				if (job_choice1 != null) {
					jc_list = document.getElementsByTagName("OL")[2];
					jc_list.getElementsByTagName("LI")[0].innerHTML = job_choice1;}
			 if (job_choice1 != null) {job_choice2 = prompt("Pick a second job")}
				if (job_choice2 != null) {
					jc_list.getElementsByTagName("LI")[1].innerHTML = job_choice2;}
			 if (job_choice2 != null) {job_choice3 = prompt("Pick a third job")}
				if (job_choice3 != null) {	
					jc_list.getElementsByTagName("LI")[2].innerHTML = job_choice3;}
			 if (job_choice3 != null) {job_choice4 = prompt("Pick a fourth and final job")}
				if (job_choice4 != null) {
					jc_list.getElementsByTagName("LI")[3].innerHTML = job_choice4;}


 

//Transportation
			if (job_choice4 != null) {document.getElementById("transportationtext").style.display = "inline-block";
			 car_choice1 = prompt("Pick a car/mode of transport")}
				if (car_choice1 != null) {
					cc_list = document.getElementsByTagName("OL")[3];
					cc_list.getElementsByTagName("LI")[0].innerHTML = car_choice1;}
			 if (car_choice1 != null) {car_choice2 = prompt("Pick a second car")}
				if (car_choice2 != null) {
					cc_list.getElementsByTagName("LI")[1].innerHTML = car_choice2;}
			 if (car_choice2 != null) {car_choice3 = prompt("Pick a third car")}
				if (car_choice3 != null) {
					cc_list.getElementsByTagName("LI")[2].innerHTML = car_choice3;}
			 if (car_choice3 != null) {car_choice4 = prompt("Pick a fourth and final car")}
				if (car_choice4 != null) {
					cc_list.getElementsByTagName("LI")[3].innerHTML = car_choice4;}



        
//Money
			if (car_choice4 != null) {document.getElementById("moneytext").style.display = "inline-block";
			 money_choice1 = prompt("Pick a yearly salary")}
				if (money_choice1 != null) {
					mc_list = document.getElementsByTagName("OL")[4];
					mc_list.getElementsByTagName("LI")[0].innerHTML = money_choice1;}
			 if (money_choice1 != null) {money_choice2 = prompt("Pick another yearly salary")}
				if (money_choice2 != null) {
					mc_list.getElementsByTagName("LI")[1].innerHTML = money_choice2;}
			 if (money_choice2 != null) {money_choice3 = prompt("Pick a third yearly salary")}
				if (money_choice3 != null) {
					mc_list.getElementsByTagName("LI")[2].innerHTML = money_choice3;}
			if (money_choice3 != null) {money_choice4 = prompt("Pick a fourth and final salary")}
				if (money_choice4 != null) {
					mc_list.getElementsByTagName("LI")[3].innerHTML = money_choice4;}

 
		
//Pets
			if (money_choice4 != null) {document.getElementById("petstext").style.display = "inline-block";
			 pet_choice1 = prompt("Pick an animal")}
				if (pet_choice1 != null) {
					pc_list = document.getElementsByTagName("OL")[5];
					pc_list.getElementsByTagName("LI")[0].innerHTML = pet_choice1;}
			 if (pet_choice1 != null) {pet_choice2 = prompt("Pick another animal")}
				if (pet_choice2 != null) {
					pc_list.getElementsByTagName("LI")[1].innerHTML = pet_choice2;}
			 if (pet_choice2 != null) {pet_choice3 = prompt("Pick a third animal")}
				if (pet_choice3 != null) {
					pc_list.getElementsByTagName("LI")[2].innerHTML = pet_choice3;}
			 if (pet_choice3 != null) {pet_choice4 = prompt("Pick a fourth and final animal")}
				if (pet_choice4 != null) {
					pc_list.getElementsByTagName("LI")[3].innerHTML = pet_choice4;}

 
        
//Places
			if (pet_choice4 != null) {document.getElementById("placestext").style.display = "inline-block";
			 place_choice1 = prompt("Pick somewhere to live")}
				if (place_choice1 != null) {
					plc_list = document.getElementsByTagName("OL")[6];
					plc_list.getElementsByTagName("LI")[0].innerHTML = place_choice1;}
			 if (place_choice1 != null) {place_choice2 = prompt("Pick another place")}
				if (place_choice2 != null) {
					plc_list.getElementsByTagName("LI")[1].innerHTML = place_choice2;}
			 if (place_choice2 != null) {place_choice3 = prompt("Pick a third place")}
				if (place_choice3 != null) {
					plc_list.getElementsByTagName("LI")[2].innerHTML = place_choice3;}
			 if (place_choice3 != null) {place_choice4 = prompt("Pick a fourth and final place")}
				if (place_choice4 != null) {
					plc_list.getElementsByTagName("LI")[3].innerHTML = place_choice4;}


	 
//result calculation    
				
		document.getElementById("futurebutton").style.display = "block";
}
//mash result
		function mash_results(){
		
  //clear background
  var xx = document.querySelectorAll("LI");

for (var i = 0; i < xx.length; i++) {
    xx[i].style.backgroundColor="transparent";
}

		mashHouse = ["Mansion", "House", "Apartment", "Shack"];
		

function number_to_love(number){
     if (number == 1)
         {return love_choice1}
     else if (number == 2){
         return love_choice2}
     else if (number == 3){
         return love_choice3}
     else if (number == 4){
         return love_choice4}
     else{
         alert("That number is not in the correct range")}}				
			alert("Your future is...(imagine a drumroll or tense gameshow music then press ok)");
			mash_number = Math.floor((Math.random() * 4));
			mashHouseResult = mashHouse [mash_number];
			alert("You live in a " + mashHouseResult);
			mash_list = document.getElementsByTagName("OL")[0];
			mash_list.getElementsByTagName("LI")[mash_number].style.backgroundColor = "yellow";
			
			
			
			//love result
var love_number = Math.floor((Math.random() * 4) + 1);
alert ("You are married to " + number_to_love(love_number));
lc_list.getElementsByTagName("LI")[love_number - 1].style.backgroundColor = "yellow";


function number_to_job(number){
     if (number == 1)
         {return job_choice1}
     else if (number == 2)
         {return job_choice2}
     else if (number == 3)
         {return job_choice3}
     else if (number == 4)
         {return job_choice4}
     else{
         alert ("That number is not in the correct range")}}
//job result
var job_number = Math.floor((Math.random() * 4) + 1);
alert ("You work as a " + number_to_job(job_number));
jc_list.getElementsByTagName("LI")[job_number - 1].style.backgroundColor = "yellow";

function number_to_car(number){
    if (number == 1)
        {return car_choice1}
    else if (number == 2)
        {return car_choice2}
    else if (number == 3)
        {return car_choice3}
    else if (number == 4)
        {return car_choice4}
    else{
        alert("That number is not in the correct range")}}
//car result
var car_number = Math.floor((Math.random() * 4) + 1);
alert ("You drive a " + number_to_car(car_number))
cc_list.getElementsByTagName("LI")[car_number - 1].style.backgroundColor = "yellow";

function number_to_money(number){
    if (number == 1)
        {return money_choice1}
    else if (number == 2)
        {return money_choice2}
    else if (number == 3)
        {return money_choice3}
    else if (number == 4)
        {return money_choice4}
    else{
        alert ("That number is not in the correct range")}}  
//money result
var money_number = Math.floor((Math.random() * 4) + 1);
alert ("You make " + number_to_money(money_number) + " a year")
mc_list.getElementsByTagName("LI")[money_number - 1].style.backgroundColor = "yellow";

function number_to_pet(number){
     if (number == 1)
         {return pet_choice1}
     else if (number == 2)
         {return pet_choice2}
     else if (number == 3)
         {return pet_choice3}
     else if (number == 4)
         {return pet_choice4}
     else{
         alert ("That number is not in the correct range")} 
		 }
//pet result
var pet_number = Math.floor((Math.random() * 4) + 1);
alert ("You have a pet "+ number_to_pet(pet_number))
pc_list.getElementsByTagName("LI")[pet_number - 1].style.backgroundColor = "yellow";

 function number_to_place(number){
     if (number == 1){
         return place_choice1}
     else if (number == 2)
         {return place_choice2}
     else if (number == 3)
         {return place_choice3}
     else if (number == 4)
         {return place_choice4}
     else{
         alert ("That number is not in the correct range")} 
}	

//place result
var place_number = Math.floor((Math.random() * 4) + 1);
alert ("and You live in " + number_to_place(place_number))	
plc_list.getElementsByTagName("LI")[place_number - 1].style.backgroundColor = "yellow";	
document.getElementsByTagName("button")[2].innerHTML = "Re-Calculate Future";
}
function change_background(){

 var pageimage = document.getElementsByTagName("body")[0];
  
    if (pageimage.style.backgroundImage.match("https://media.giphy.com/media/10FNGnuUcdEeUE/giphy.gif")) {
        pageimage.style.backgroundImage = "url(http://www.fumcs.com/wp-content/uploads/2012/12/notebook-paper-1-lines.jpg )";
		console
		
    } 
	else {
        pageimage.style.backgroundImage = "url(https://media.giphy.com/media/10FNGnuUcdEeUE/giphy.gif )";
		
    }
	}
