//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
function moreAboutHome(address, distanceFromTown, hasNeighbours) {
    return datatype = (typeof (address) + typeof (distanceFromTown) + typeof (hasNeighbours));
}
//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean

function moreAboutKaren(parents, noOfSiblings, isNuclearFamily) {
    if (typeof (parents) === String && typeof (noOfSiblings) === Number && typeof (isNuclearFamily) === Boolean) {
        return true;
    }
    else {
        return false;
    }
}

//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value

function doesFriendExist(ageInText, ageInNumber) {
    if (typeof (ageInText) || typeof (ageInNumber) === NaN) {
        return NaN;
    }
    if (typeof (ageInText) === 'NaN' && typeof (ageInNumber) === NaN) {
        return 'NaN';
    }
}

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?

totalNoOfSweets = x;
function sweetTooth(totalNoOfSweets, sweetsConsumedbyKaren, sweetsConsumedInMeters, metersToTravel) {
    sweetsConsumedbyKaren = y + sweetsConsumedInMeters * metersToTravel;
    sweets_remains = totalNoOfSweets - sweetsConsumedbyKaren;
    sweetsConsumedbyfriend = sweets_remains / 2;

    if (typeof (totalNoOfSweets) || typeof (sweetsConsumedbyKaren) || typeof (sweetsConsumedInMeters) || typeof (metersToTravel) === NaN) {
        sweetsConsumedbyfriend = 'No Sweets';
    }

    return sweetsConsumedbyfriend;


}

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
function convertToCelsius(fahrenheit) {
    celsius = (fahrenheit - 32) * (5 / 9);

    if (typeof (fahrenheit) === undefined || String || Object) {
        return ("Technical Error!");
    }
    else {
        return celsius;
    }



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
        case 1:
            return ("Take her daughter to a doctor");
        case -1:
            return ("Break down and give up all hope");
        case undefined:
            return ("Wasn't able to decide");
        case 'I give up':
            return ("Refused to do anything for Karen");
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
    var strategy = prompt("Enter the Strategies");
    return (strategy.length)

}
