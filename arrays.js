//Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
let arr1 = [3,7,34,90,12];
console.log('lastindex',arr1.slice(-1));

let arr2 = [true, "green", "where",12,56];
console.log('lastindex',arr2[arr2.length-1]);

//Write a JS program that will join the following array elements into a string myPets = ["Cow", "Bird", "Snake", "Dog"];
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let pets = myPets.join(" ");
console.log(pets);

//Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
console.log(arr3)
console.log(arr3.sort(function(a, b){return a-b}));

//Write a program to remove duplicates from the following array.Console the array without duplicates, 
//and console another array that only contains the duplicates
//let arr = ["boy", "man", "girl",            "school", "girl", "woman"];
let arr = ["boy", "man", "girl",            "school", "girl", "woman"];
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
 
console.log(removeDuplicates(arr));

//Write a JS script to search for the following word in the array."food"If the word is present,
// return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];
function searchWord(arr){
    arr = arr.map(item => String(item).toLowerCase());
    if(arr.includes("food")){
        return "food";
    } else {
        return "the search word was not found"
    }
}
let arr5 = ["the","way","x",4];
console.log(searchWord(arr5));

//Write a JS script to sort the following string:let word = "renniw"
let word = "renniw";
let sortedWord = word.split('').sort().join('');
console.log(sortedWord);




 

