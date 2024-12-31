let userName = prompt("Enter Your Name");

let meat = +prompt("Welcome " + userName + " to Meat House \n Select your Meat \n 1. Beef \n 2. Mutton \n 3. Chicken");

let type;
let qty;


if (meat == 1) {
  type = +prompt("Please Select Beef Type \n 1. Hunter Beef @ Rs.900/kg \n 2. Rib @ Rs.800/kg \n 3. Undercut @ Rs.700/kg");

  if (type == 1) {
    qty = +prompt("Please Enter Quantity (in kg)");
    alert("Total Bill for Hunter Beef is Rs. " + qty * 900);
  }

  else if (type == 2) {
    qty = +prompt("Please Enter Quantity (in kg)");
    alert("Total Bill for Rib is Rs. " + qty * 800);
  }

  else if (type == 3) {
    qty = +prompt("Please Enter Quantity (in kg)");
    alert("Total Bill for Undercut is Rs. " + qty * 700);
  }

  else {
    alert("Invalid Beef type selected!");
  }
}
else if (meat == 2) {
  type = +prompt("Please Select Mutton Type \n 1. Mutton Legs  @ Rs.1200/kg \n 2. Minced Meat @ Rs.1100/kg \n 3. Undercut @ Rs.1500/kg");

  if (type == 1) {
    qty = +prompt("Please Enter Quantity (in kg)");
    alert("Total Bill for Mutton Legs is Rs. " + qty * 1200);
  }

  else if (type == 2) {
    qty = +prompt("Please Enter Quantity (in kg)");
    alert("Total Bill for Minced Meat is Rs. " + qty * 1100);
  }

  else if (type == 3) {
    qty = +prompt("Please Enter Quantity (in kg)");
    alert("Total Bill for Undercut is Rs. " + qty * 1500);
  }

  else {
    alert("Invalid Mutton type selected!");
  }
}

else if (meat == 3) {
  type = +prompt("Please Select Chicken Type \n 1. Wings @ Rs.500/kg \n 2. Legs @ Rs.450/kg \n 3. Breast @ Rs.600/kg");

  if (type == 1) {
    qty = +prompt("Please Enter Quantity (in kg)");
    alert("Total Bill for Wings is Rs. " + qty * 500);
  } else if (type == 2) {
    qty = +prompt("Please Enter Quantity (in kg)");
    alert("Total Bill for Legs is Rs. " + qty * 450);
  } else if (type == 3) {
    qty = +prompt("Please Enter Quantity (in kg)");
    alert("Total Bill for Breast is Rs. " + qty * 600);
  } else {
    alert("Invalid Chicken type selected!");
  }

} else {
  alert("Invalid Meat selection! Please select 1, 2, or 3.");
}

