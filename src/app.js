//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable

function moreAboutHome(address,distance,hasNeighbours){
    var address,distance,hasNeighbours;
    let t=typeof(address);
    let t1=typeof(distance);
    let t2=typeof(hasNeighbours);
    return t+t1+t2;

}


//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean

function moreAboutKaren(parents, noOfSiblings, isNuclearFamily) {

    if (typeof(parents) != "string" || typeof(noOfSiblings) != "number" || typeof(isNuclearFamily) != "boolean") {
        return false;
    }
    return true;
}

//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value

function doesFriendExist(ageInText, ageInNumber) {
    if (isNaN(ageInText)) {
        return ageInText;
    } else if (isNaN(ageInNumber)) {
        return ageInNumber;
    }
}

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?

function sweetTooth(totalSweets, sweetsConsumed, sweetsConsumedInNMeters, metersTravelled) {
    if (Number.isInteger(totalSweets) && Number.isInteger(sweetsConsumed) && Number.isInteger(sweetsConsumedInNMeters) && Number.isInteger(metersTravelled)) {
        return (totalSweets - (sweetsConsumed + sweetsConsumedInNMeters * metersTravelled))/2;
        }
    return "No sweets for Karen's friend";
    
}
//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
function convertToCelsius(fahrenheit) {

    if (typeof(fahrenheit) == "object" || typeof(fahrenheit) == "string" || typeof(fahrenheit) == "undefined") {
        return 'Technical Error!';
    }
        return 5 / 9 * (fahrenheit - 32);
}
//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
function aDifficultChoice(choice) {
    switch (choice) {
        case undefined:
            return "Wasn't able to decide";
        case -1:
            return "Break down and give up all hope";
        case 1:
            return "Take her daughter to a doctor";
            break;
        case 2:
            return "Talk to her husband about it";
            break;
        case 3:
            return "Counsel her daughter herself";
            break;
        case 4:
            return "Lock her daughter in her room";
            break;
        default:
                return "Refused to do anything for Karen";
            
    }
}

//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
function consoleKaren(strategies) {
    let s = "";
    for (var i = 0; i < strategies.length; i++) {
        s = s + strategies[i] + " ";
    }
    return s.length;
}

