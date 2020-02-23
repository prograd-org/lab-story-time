function moreAboutHome(address, distanceFromTown, hasNeighbours) {
    var str = ""; 
    str = typeof(address) + typeof(distanceFromTown) + typeof(hasNeighbours);
    return str;
}

function moreAboutKaren(parents, noOfSiblings, isNuclearFamily) {
    if(typeof(parents)==="string" && typeof(noOfSiblings)==="number" && typeof(isNuclearFamily)==="boolean") {
        return true;
    }
    else {
        return false;
    }
}

function doesFriendExist(ageInText, ageInNumber) {
    if(isNaN(ageInText) === true) {
        return ageInText;
    }
    else {
        return ageInNumber;
    }
}

function sweetTooth(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel) 
{
    if(typeof(totalNoOfSweets)!= "number"|| typeof(sweetsConsumedByKaren)!= "number" || typeof(sweetsConsumedInNMeters)!= "number" || typeof(metersToTravel)!= "number") {
        return "No sweets for Karen's friend";
    }
    var sweet = (totalNoOfSweets-sweetsConsumedByKaren)-(sweetsConsumedInNMeters * metersToTravel) / 2;
    
    if(sweet === 0) {
        return 0;
    }
    else {
        return sweet;
    }
}

function convertToCelsius(fahrenheit) {
    if(typeof(fahrenheit) === "number") {
        return (fahrenheit - 32) * 5/9;
    }
    else {
        return "Technical Error!";
    }
}

function aDifficultChoice(choice) {
    switch(choice) {
        case 1:
            return "Take her daughter to a doctor";
            break;
        case 2:
            return "Talk to her husband about it";
            break;
        case 3:
            return "Counsel her daughter in her room";
            break;
        case 4:
            return "Lock her daughter in her room";
            break;
        case -1:
            return "Break down and give up all hope";
            break;
        case "I give up":
            return "Refused to do anything for Karen";
            break; 
        default:
            return "Wasn't able to decide";
    }
}

