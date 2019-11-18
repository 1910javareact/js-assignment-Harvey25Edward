/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  if (shape ==='Triangle'){
   for(let i = 1; i <= height; i++){
     for (let j = 1; j<=i; j++){
     console.log(`${character}`)
     }
   }
  }else if (shape === 'Square'){
    for(let i = 1; i<= height; i++){
      for (let j = 0 ; j <= height;j++){
        console.log(`${character}`)
      }
    }
  }else if(shape === 'Diamond'){
    for(let i = 1;i<=height;i++ ){
      for(let j=1; j<=height;j+2){
        console.log(`${character}`)
      }
      for(j=height-2;j>=1;j-2){
        console.log(`${character}`)
      }
    }
  }

}