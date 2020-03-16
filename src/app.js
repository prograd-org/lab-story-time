//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
function moreAboutHome(arg1, arg2, arg3) {
    return typeof (arg1) + typeof (arg2) + typeof (arg3);
}

//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
function moreAboutKaren(arg1, arg2, arg3) {
    return moreAboutHome(arg1, arg2, arg3) == "stringnumberboolean";
    //(typeof(arg1) == String && typeof(arg2) == Number && typeof(arg3)==Boolean);
}

//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
function doesFriendExist(arg1, arg2) {
    if ((typeof (arg1) == "string" && arg1.length > 0) || (typeof (arg2) == "string" && arg2.length > 0)) {
        return "NaN";
    } else {
        return NaN;
    }
}

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
function sweetTooth(arg1 = '', arg2 = '', arg3 = '', arg4 = '') {
    if (typeof (arg1) != "number" || typeof (arg2) != "number" || typeof (arg3) != "number" || typeof (arg4) != "number")
        return "No sweets for Karen's friend";
    return 0;
}

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
function convertToCelsius(fahrenheit) {
    if (typeof (fahrenheit) != "number")
        return "Technical Error!";
    return (fahrenheit - 32) * 5 / 9;
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
        case -1:
            return "Break down and give up all hope";
        case 1:
            return "Take her daughter to a doctor";
        case 2:
            return "Talk to her husband about it";
        case 3:
            return "Counsel her daughter herself";
        case 4:
            return "Lock her daughter in her room";
        case "I give up":
            return "Refused to do anything for Karen";
        default:
            return "Wasn't able to decide";
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
function printKaren(strategies) {
    var result = '';
    for (var i = 0; i < strategies; i++) {
        result += strategies[i];
    }
    return result.length;
}