
// Program to take the input from the user and print it.
var count = 0;
while(count<5){
    var value = prompt("Enter the value: ");
    document.write(value);
    count++;
}


// Program to get total marks
var total = 0;
var count = 0;
while(count<5){
    var marks = prompt("Enter the marks: ");
    total += parseInt(marks);
    count++;
}
document.write(total);