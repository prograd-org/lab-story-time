//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
function moreAboutHome(address, distanceFromTown, hasNeighbours) {

    let result = "";
    result = result.concat(typeof address, typeof distanceFromTown, typeof hasNeighbours);

    return result;

}
//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
function moreAboutKaren(parents, noOfSiblings, isNuclearFamily) {

    let flag = false;

    let result = "";
    result = result.concat(typeof parents, typeof noOfSiblings, typeof isNuclearFamily);

    if(result == "stringnumberboolean")
        flag = true;      

    return flag;

}
//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
function doesFriendExist(ageInText, ageInNumber) {

    if(ageInText == 'NaN')
        return ageInText;
    return NaN;
}
//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
function sweetTooth(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInMeters, metersToTravel) {

    if((typeof totalNoOfSweets != 'number') || (typeof sweetsConsumedByKaren != 'number') || (typeof sweetsConsumedInMeters != 'number') || (typeof metersToTravel != 'number')) 
        return "No sweets for Karen's friend"; 

    totalNoOfSweets = totalNoOfSweets - (sweetsConsumedByKaren + sweetsConsumedInMeters * metersToTravel);
    totalNoOfSweets = totalNoOfSweets/2;
    if(totalNoOfSweets < 0)
        return 0;

    return totalNoOfSweets;

}
//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
function convertToCelsius(fahrenheit) {

    if(typeof fahrenheit != 'number') return "Technical Error!";

    let celsius = (fahrenheit - 32) * 5/9;

    return celsius;

}
//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
function aDifficultChoice(choice) {

    if(typeof choice == 'undefined') return "Wasn't able to decide";
    if(choice == 1) return "Take her daughter to a doctor";
    if(choice == -1) return "Break down and give up all hope";
    if(choice == "I give up") return "Refused to do anything for Karen"
}
//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
