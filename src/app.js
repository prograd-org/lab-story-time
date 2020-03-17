//Trial 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable

function moreAboutHome(address, distanceFromTown, hasNeighbour) {
    var address; 
    var distanceFromTown;
    var hasNeighbour;

    let addr = typeof (address);
    let dist = typeof (distanceFromTown);
    let neigh = typeof (hasNeighbour);

    return addr + dist + neigh;
}

//Trial 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean

function moreAboutKaren(Parents, noOfSiblings, isNuclearFamily) {
    var Parents;
    var noOfSiblings;
    var isNuclearFamily;

    if (typeof (Parents) == "string" && typeof (isNuclearFamily) == "boolean" && (Number.isInteger(noOfSiblings)) ) {
        return true;
    }
    else{
        return false;
    }
}

//Trial 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
function doesFriendExist(ageInText,ageInNumber){
    
    if(isNaN(ageInText)==true)
    {
        return ageInText;
    }
   else
   {
       return ageInNumber;
   }
}

//Trial 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
function sweetTooth(totalNoofSweets,sweetsConsumeByKaren,sweetsConsumedInNMeters,metersToTravel)
{
    let get_sweet;
    if(Number.isInteger(totalNoofSweets)&&Number.isInteger(sweetsConsumeByKaren)&&Number.isInteger(sweetsConsumedInNMeters)&&Number.isInteger(metersToTravel)){
        get_sweet = totalNoofSweets - (sweetsConsumeByKaren + sweetsConsumedInNMeters * metersToTravel);
        return get_sweet / 2;
        }
        else{
            no_sweet =  "No sweets for Karen's friend";
            return no_sweet;
        }
    

}
//Trial 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
function convertToCelsius(fahrenheit)
{
    if(Number.isInteger(fahrenheit))
    {
        return (fahrenheit-32)*5/9;
    }
    else 
    {
       return "Technical Error!";
    }

    
}
//Trial 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
function aDifficultChoice(choice){
    switch(choice)
    {
        case 1:
            {
                 return "Take her daughter to a doctor";
            }
        break;
        case 2:
            {
                 return "Talk to her husband about it";
            }
        break;
        case 3:
            {
                 return "Counsel her daughter herself";
            }
        break;
        case 4:
            {
                 return "Lock her daughter in her room";
            }
        break;
        case -1:
            {
                 return "Break down and give up all hope";
            }
        break;
        case undefined:
            {
                return "Wasn't able to decide";
            }
        break;
        default:
            {
                return "Refused to do anything for Karen";
            }
        



    }
}
//Challenge 1:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
function consoleKaren(strategies){
    let t_len_strategy;
    var strategy;
    for(var i=0;i<strategies.length;i++)
    {
       strategy = strategies.split("");
   }
   return t_len_strategy;
}