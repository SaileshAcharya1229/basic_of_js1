//write a js program to find grade of student

const per = Number(prompt("Enter your precentage"));

switch (true) {
  case per >= 80 && per < 100:
    alert("grade is A");
    break;
  case per < 80 && per >= 60:
    alert("grade is B");
    break;
  default:
    alert("wrong choice");
}
