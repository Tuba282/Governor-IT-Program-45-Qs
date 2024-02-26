console.log("Hello World");
// Q1.Install Node.js, TypeScript and VS Code on your computer.
// Yes I have done.
// Q2.Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
console.log("\n........................Q2.................................");
console.log("\n");
var person = "Eric";
console.log("Hello Eric ! Would You like to learn some python today..?");
// Q3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("\n........................Q3.................................");
console.log("\n");
var p = "sara";
console.log(p.toLocaleLowerCase());
console.log(p.toUpperCase());
console.log(p.toLocaleUpperCase()); // title case nahi hai. "tostring()"bhi use kar sakty hain titlecase k liye.
// Q4.Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("\n........................Q4.................................");
console.log("\n");
console.log('Our Founder Quaid-e-Azam Said :“Expect the best, prepare for the worst.”');
// Q5.Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
console.log("\n........................Q5.................................");
console.log("\n");
var famous_person = "Qauid-e-Azam";
var message = '“Expect the best, prepare for the worst.”';
console.log("Our" + famous_person + "Said:" + message);
// Q6.Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("\n........................Q6.................................");
console.log("\n");
var store = "Malika";
console.log(store);
console.log("\n" + store + "\n");
console.log("\t" + store + "\t");
// Q7.Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("\n........................Q7.................................");
console.log("\n");
var a = 7;
var b = 8;
var c = 3;
var d = 2;
var add = a + b;
var sub = c - d;
var mul = a * d;
var div = b / d;
// Q8.You should create four lines that look like this:
// console.log(5 + 3)
console.log("\n........................Q8.................................");
console.log("\n");
console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
// Q9.Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
console.log("\n........................Q9.................................");
console.log("\n");
var x = 7;
console.log("My favorite Number is" + x);
// Q10.Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
console.log("\n........................Q10................................. ");
console.log("\n Code is in Comment");
// console.log("Now I am adding comments in my program"); This is answer of "Q.10"
// Q11.Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log("\n........................Q11.................................");
console.log("\n");
var array = ['Nayab', 'Bushra', 'Tuba', 'sara'];
// Q12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("\n........................Q12.................................");
console.log("\n");
console.log("Hey " + array[0] + " how's your work going...? ");
console.log("Hey " + array[2] + " how's your work going...? ");
console.log("Hey " + array[3] + " how's your work going...? ");
console.log("Hey " + array[1] + " how's your work going...? ");
// Q13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” 
console.log("\n........................Q13.................................");
console.log("\n");
var array1 = ['train', 'flight', 'bus', 'taxi', 'car', 'bike', 'scooty'];
console.log("I would like to own a " + array1[5]);
console.log("I once travel  in a " + array1[0]);
console.log("One of my wish is to take " + array1[1] + ' to abroad with mamma & Bushra  and go on a loooong trip ');
console.log("Goverment Issued  people Service " + array1[2] + 'for the citizen of karachi ');
console.log("my friend Gave me lift in her " + array1[4]);
console.log("He has given ride of a " + array1[6]);
console.log("I've never get in a " + array1[3]);
// Q14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("\n........................Q14.................................");
console.log("\n");
var array2 = ['Nayab', 'Bushra', 'Tuba', 'Muneeb', 'Surmad', 'Sara', 'Imran'];
console.log('\nI would Like to invite you ' + array2[0] + 'and your family for dinner party tonight ');
console.log('I would Like to invite you ' + array2[1] + 'and your family for dinner party tonight ');
console.log('I would Like to invite you ' + array2[2] + 'and your family for dinner party tonight ');
// Q15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
console.log("\n........................Q15.................................");
console.log("\n");
console.log("\n.Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.");
var array3 = ['Nayab', 'Bushra', 'Tuba', 'Muneeb', 'Surmad'];
console.log("\n");
console.log(array3[3]);
console.log(array3[4]);
console.log(" \nDon't say sorry if you both could'nt make out for dinner.");
console.log("\n.Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.");
var array4 = ['Nayab', 'Bushra', 'Tuba', 'Muneeb', 'Surmad', 'Sara', 'Imran'];
console.log(array4);
console.log("\n.Print a second set of invitation messages, one for each person who is still in your list.");
var array5 = ['Nayab', 'Bushra', 'Tuba', 'Sara', 'Imran'];
console.log(' \nI would Like to invite you ' + array5[0] + 'and your family for dinner party tonight');
console.log('I would Like to invite you ' + array5[1] + 'and your family for dinner party tonight');
console.log('I would Like to invite you ' + array5[2] + 'and your family for dinner party tonight');
console.log('I would Like to invite you ' + array5[3] + 'and your family for dinner party tonight');
console.log('I would Like to invite you ' + array5[4] + 'and your family for dinner party tonight');
// Q16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
console.log("\n........................Q16.................................");
var array6 = ['Nayab', 'Bushra', 'Tuba', 'Sara', 'Imran', 'Ayesha', 'Maheen', 'Noor'];
console.log("\n Hey Guys I have found a big table for us to dinner so and i want three more people " + array6[5] + array6[6] + array6[7] + " for this dinner party \n ");
console.log(" Q. Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table. \n");
console.log(" Add one new guest to the beginning of your array.");
var array6 = ['Nayab', 'Bushra', 'Tuba', 'Sara', 'Imran', 'Ayesha', 'Maheen', 'Noor', 'fatima'];
array6.unshift("Kiara");
console.log(array6);
console.log("\n");
console.log("• Add one new guest to the middle of your array. ");
array6.splice(6, 0, 'Ahad');
console.log(array6);
console.log("\n");
console.log("• Use append() to add one new guest to the end of your list.");
var array6 = ['Nayab', 'Bushra', 'Tuba', 'Sara', 'Imran', 'Ayesha', 'Maheen', 'Noor', 'fatima'];
array6.push("Asad");
console.log("\n");
// array6.append(8,'Sarmad'); Append Function does'nt work
console.log(array6);
console.log("• Print a new set of invitation messages, one for each person in your list.");
console.log("\n");
console.log("Where Are You " + array6[0]);
console.log("Where Are You " + array6[1]);
console.log("Where Are You " + array6[2]);
console.log("Where Are You " + array6[3]);
console.log("Where Are You " + array6[4]);
console.log("Where Are You " + array6[5]);
console.log("Where Are You " + array6[6]);
console.log("Where Are You " + array6[7]);
console.log("Where Are You " + array6[8]);
// Q17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
console.log("\n........................Q17.................................");
console.log("\n");
console.log("Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.");
console.log("\nOh! Sorry Guys I can invite only two people for dinner due to my budget fail.");
console.log("\n Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you're sorry you can’t invite them to dinner.");
console.log("\nI am Sorry " + array6[0] + " I  can't invite You to dinner.");
array6.shift();
console.log(array6[1], " " + array6[2], " " + array6[3], " " + array6[4], " " + array6[5], " " + array6[6], " " + array6[7], " " + array6[8]);
console.log("\nI am Sorry " + array6[0] + " I  can't invite You to dinner.");
array6.shift();
console.log(array6[1], " " + array6[2], " " + array6[3], " " + array6[4], " " + array6[5], " " + array6[6], " " + array6[7]);
console.log("\nI am Sorry " + array6[0] + " I  can't invite You to dinner.");
array6.shift();
console.log(array6[1], " " + array6[2], " " + array6[3], " " + array6[4], " " + array6[5], " " + array6[6]);
console.log("\nI am Sorry " + array6[0] + " I  can't invite You to dinner.");
array6.shift();
console.log(array6[1], " " + array6[2], " " + array6[3], " " + array6[4], " " + array6[5]);
console.log("\nI am Sorry " + array6[0] + " I  can't invite You to dinner.");
array6.shift();
console.log(array6[1], " " + array6[2], " " + array6[3], " " + array6[4]);
console.log("\nI am Sorry " + array6[0] + " I  can't invite You to dinner.");
array6.shift();
console.log(array6[1], " " + array6[2], " " + array6[3]);
console.log("\nI am Sorry " + array6[0] + " I  can't invite You to dinner.");
array6.shift();
console.log(array6[1], " " + array6[2]);
console.log("\n");
console.log("Print a message to each of the two people still on your list, letting them know they’re still invited");
console.log("\n Hey " + array6[1] + " " + array6[2] + ", I am letting you both know that you're still invited");
console.log("\nRemove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.");
array6.shift();
array6.shift();
array6.shift();
console.log(array6);
// Q18.Seeing the World: Think of at least five places in the world you’d like to visit.
console.log("\n........................Q18.................................");
console.log("• Store the locations in a array. Make sure the array is not in alphabetical order.");
var array7 = ['Clifton Beach', 'Gulshan-e-Iqbal', 'Bahria Town', 'Saddar', 'DHA'];
console.log("\n");
console.log(" • Print your array in its original order.");
console.log(array7);
console.log("\n");
console.log("• Print your array in alphabetical order without modifying the actual list.");
console.log(array7.sort());
console.log('\n');
console.log("• Show that your array is still in its original order by printing it again.");
console.log(array7);
console.log("\n");
console.log("• Reverse the order of your list. Print the array to show that its order has changed");
console.log(array7.reverse());
console.log("\n");
console.log("• Reverse the order of your list again. Print the list to show it’s back to its original order.");
console.log(array7.reverse());
console.log("\n");
console.log("• Reverse the order of your list again. Print the list to show it’s back to its original order.");
console.log(array7.sort());
console.log("\n");
console.log("• Reverse the order of your list again. Print the list to show it’s back to its original order.");
console.log(array7.reverse());
console.log("\n");
// Q19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("\n........................Q19.................................");
console.log('programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.');
console.log("\n" + 'You all ' + array2.length + ' are invited to diner');
// Q20.Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
console.log("\n........................Q20.................................");
console.log("\n");
var array8 = ['Mount Everest', 'Indus River', 'Algeria', 'Karachi', '14.5 million'];
console.log(array8);
// 21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
console.log("\n........................Q21.................................");
var object = {
    mountain: "Mount Everest",
    River: "Indus River",
    Mycity: 'Karachi',
    Population: '14.5million'
};
console.log(object);
console.log("\n........................Q22.................................");
console.log("\n");
// Q22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
console.log(array[0]);
console.log(array[4]);
console.log(array[2]);
console.log(array[3]);
console.log(array[1]);
console.log(array[5]);
console.log('This is index error i am generating');
console.log('\nI wil Coreect it below');
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log("\n........................Q23.................................");
console.log("\n");
// Q23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
var digit = 20;
console.log(digit == 20);
console.log(digit != 20);
console.log(digit >= 20);
console.log(digit < 20);
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
console.log("\n");
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False
var box_1 = 45;
var box_2 = 100;
console.log(box_1 == box_2); //false
console.log(box_1 == box_2 && box_1 >= 20); //false
console.log(box_1 >= box_2); //false
console.log(box_1 <= box_2 && box_1 >= 20); //true
console.log(box_1 != box_2); //true
console.log(box_1 <= box_2); //true
console.log(box_1 != box_2 || box_2 >= box_1); //true
console.log(!box_2); //false
console.log("\n........................Q24.................................");
console.log("\n");
// Q24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
console.log("• Tests for equality and inequality with strings");
console.log("\n");
var array1 = ['train', 'flight', 'bus', 'taxi', 'car', 'bike', 'scooty'];
console.log(array1);
console.log("\n");
console.log(array1[0] == 'taxi');
console.log(array1[2] == 'bus');
console.log("\n");
console.log("• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");
console.log("\n");
var array9 = [22, 12, 15, 14, 89, 20];
console.log(array9[2] == array9[3]); //false
console.log(array9[3] != array9[0]); //true
console.log(array9[0] >= array9[3]); //true
console.log(array9[1] <= array9[3]); //true
console.log("\n");
console.log("• Tests using 'and' and 'or' operators");
console.log("\n");
console.log(array9[3] != array9[0] && array9[2] == array9[3]); //false
console.log(array9[0] >= array9[3] || array9[1] <= array9[3]); //true
console.log("\n");
console.log("• Test whether an item is in a array");
console.log("\n");
if (12 in array9) {
    console.log("true");
}
else {
    console.log('false');
}
////////////////////////////
if (34 in array9) {
    console.log("true");
}
else {
    console.log('false');
}
console.log("\n");
console.log("• Test whether an item is not in a array.");
console.log("\n");
if (12 in array9) {
    console.log("true");
}
else {
    console.log('false');
}
////////////////////////////
if (34 in array9) {
    console.log("true");
}
else {
    console.log('false');
}
// Q25.Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
console.log("\n........................Q25.................................");
console.log("\n");
var alien_color = 'green';
console.log("• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.");
console.log("\n");
if (alien_color == 'green') {
    console.log('5 points');
}
console.log("\n");
console.log("• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.");
console.log("\n");
if (alien_color == 'red') {
    console.log('5 points');
}
else {
}
// Q26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
console.log("\n........................Q26.................................");
console.log("• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.");
console.log("\n");
if (alien_color == 'green') {
    console.log('5 points');
}
console.log("\n");
console.log("• If the alien’s color isn’t green, print a statement that the player just earned 10 points.");
console.log("\n");
if (alien_color != 'green') {
    console.log('10 points');
}
console.log("\n");
console.log("• Write one version of this program that runs the if block and another that runs the else block.");
console.log("\n");
if (alien_color == 'red') {
    console.log('5 points');
}
else {
    console.log('alien_color is not red');
}
// Q27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
console.log("\n........................Q27.................................");
console.log("\n");
console.log("• If the alien is green, print a message that the player earned 5 points");
console.log("\n");
if (alien_color == 'green') {
    console.log('5 points');
}
else {
    console.log('alien_color is not greed');
}
console.log("\n");
console.log("• If the alien is yellow, print a message that the player earned 10 points.");
console.log("\n");
if (alien_color == 'yellow') {
    console.log('5 points');
}
else {
    console.log('player earned 10 points');
}
console.log("\n");
console.log("• If the alien is red, print a message that the player earned 15 points.");
console.log("\n");
if (alien_color == 'red') {
    console.log('15 points');
}
else {
    console.log('alien_color is not red');
}
console.log("\n");
console.log("• Write three versions of this program, making sure each message is printed for the appropriate color alien.");
console.log("\n");
if (alien_color == 'yellow') {
    console.log('alien color is not yellow');
}
if (alien_color == 'red') {
    console.log('alien color is not red');
}
else {
    console.log('yes alien color is green plyer got 5 points');
}
// Q28.Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
console.log("\n........................Q28.................................");
console.log("\n");
console.log("• If the person is less than 2 years old, print a message that the person is a baby.");
console.log("\n");
var Person = 3;
if (Person > 2) {
    console.log('the person is not a baby');
}
else {
    console.log('the person is a baby');
}
// *************************************
console.log("\n");
console.log("• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.");
console.log("\n");
var Person = 3;
if (Person > 2 && Person < 4) {
    console.log('the person is a toddler');
}
else {
    console.log('the person is a baby');
}
// *************************************
console.log("\n");
console.log("• If the person is at least 4 years old but less than 13, print a message that the person is a kid.");
console.log("\n");
var Person = 10;
if (Person > 4 && Person < 13) {
    console.log('the person is a kid');
}
else {
    console.log('the person is a baby');
}
// *************************************
console.log("\n");
console.log("• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.");
console.log("\n");
var Person = 17;
if (Person > 13 && Person < 20) {
    console.log('the person is a teenager');
}
else {
    console.log('the person is a baby');
}
// *************************************
console.log("\n");
console.log("• If the person is at least 20 years old but less than 65, print a message that the person is an adult.");
console.log("\n");
var Person = 35;
if (Person > 20 && Person < 65) {
    console.log('the person is an adult');
}
else {
    console.log('the person is a baby');
}
// *************************************
console.log("\n");
console.log("• If the person is age 65 or older, print a message that the person is an elder.");
console.log("\n");
var Person = 3;
if (Person > 65 && Person < 100) {
    console.log('the person is an elder');
}
else {
    console.log('the person is a baby');
}
// Q29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
console.log("\n........................Q29.................................");
console.log(" Make a array of your three favorite fruits and call it favorite_fruits");
console.log("\n");
var favorite_fruits = ['banana', 'apple', 'guava', 'mango', 'pineapple', 'grapes'];
console.log(favorite_fruits);
console.log("\n");
console.log("• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!");
console.log("\n");
if (favorite_fruits[0] == 'grapes') {
    console.log('This is not grapes');
}
else if (favorite_fruits[1] == 'grapes') {
    console.log('This is not grapes');
}
else if (favorite_fruits[2] == 'grapes') {
    console.log('This is not grapes');
}
else if (favorite_fruits[3] == 'grapes') {
    console.log('This is not grapes');
}
else if (favorite_fruits[4] == 'grapes') {
    console.log('This is not grapes');
}
else {
    console.log(' I like grapes');
}
// Q30.Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
console.log("\n........................Q30.................................");
var u_1 = ['hasan', 'ali', 'kamran', 'akram', 'hussain', 'admin'];
console.log("\n");
console.log("• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?");
console.log("\n");
for (var u_1_1 = 0; u_1_1 < 3; u_1_1++) {
    console.log("Block statement execution no." + u_1_1);
}
// *************************************
console.log("\n");
console.log("•Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.");
console.log("\n");
console.log("Hello Hasan, thank you for logging in again.");
// Q31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
console.log("\n........................Q31.................................");
var array10 = [];
console.log(". If the list is empty, print the message We need to find some users!");
console.log("\n");
console.log("We need to find some users");
console.log("\n");
console.log("• Remove all of the usernames from your array, and make sure the correct message is printed.");
console.log("\n");
// Q32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
console.log("\n........................Q32.................................");
console.log("\n");
console.log("• Make a list of five or more usernames called current_users");
console.log("\n");
var list_1 = ['hasan', 'ali', 'kamran', 'akram', 'hussain']; //current_users list
console.log("\n");
console.log("• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.");
console.log("\n");
var list_2 = ['amna', 'ali', 'kamran', 'israr', 'bushra']; //new_users list
console.log("\n");
console.log("• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.");
console.log("\n");
// for(list_2 in list_2 ) 
// I am having trouble in solving loop questions 
// Q33.Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
console.log("\n........................Q33.................................");
console.log("\n");
console.log("• Store the numbers 1 through 9 in a array.");
console.log("\n");
var i = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //ordinal_numbers
console.log("\n");
console.log("• Loop through the array.");
console.log("\n");
for (var i_1 = 0; i_1 <= 10; i_1++) {
    if (i_1[0] == 1) {
        console.log("1st");
    }
    else if (i_1[1] == 2) {
        console.log("2nd");
    }
    else if (i_1[2] == 3) {
        console.log("3rd");
    }
    else {
        console.log(i_1, "th");
    }
}
