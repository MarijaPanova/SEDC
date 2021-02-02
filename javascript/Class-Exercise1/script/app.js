//  CREATE A NEW ARRAY THAT WILL BE CONSISTED 
//   OF THE ELEMENTS WHICH ARE THE LENGTHS
//  OF THE ELEMENTS IN THE ALREADY GIVEN ARRAY OF NAMES
let namesArray = ["Bill", "Ana", "Josephine", "Elena"];
function mapToArrayElementsLength(namesArray) {
    let namesLengthArray = [];
    for (let i = 0; i < namesArray.length; i++) {
        let nameLength = namesArray[i].length;
        namesLengthArray.push(nameLength);
    }
    return namesLengthArray;
}
let namesLengthArray = mapToArrayElementsLength(namesArray)
console.log(namesLengthArray);
