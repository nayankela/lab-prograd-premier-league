//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
const managerDetails =[managerName, managerAge, currentTeam, trophiesWon];
return managerDetails;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(arr){
if(arr.length == 0){
return null;
}else{ 

var teamFormation ={
  defender: arr[0], 
  midfield: arr[1], 
  forward: arr[2]
}
return teamFormation;
}
}
createFormation(formation);

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
var players = {
   name: 'David Silva', age: 32, 
   debut: 2005,
    team: 'Manchester City', 
  position: 'Midfielder', country: 'Spain', 
  url: 'https://media.guim.co.uk/cf0a8b9a85d5cab6f42e5a7172a056b2a2aff541/0_560_4618_2771/500.jpg', 
  awards:  { 
    name: 'PFA Premier League Team of the Year', 
    year: 2014 
    }
}

players.debut = year;
return players;

}
//Progression 4 - Filter players that play at the position _______

function filterByPosition(position){
let arr = [];
if(position == undefined){
  return arr;
} 

}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName){
let arr= [];
if(awardName == undefined){
return arr;
}
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){

}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxTimes(awardName, country){
let arr= [];
if(awardName == undefined && country == undefined){
return arr;
}
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  
}
//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team) {
  
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {
  
}