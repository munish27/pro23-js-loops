// Program to get total marks
var total = 0;
var count = 0;
while(count<5){
    var marks = prompt("Enter the marks: ");
    total += parseInt(marks);
    count++;
}
document.write(total);
document.getElementById("pro2").innerHTML = total;