const jsonObject=[
    {
        transacId:101,
        transacType:"air travel",
        transacDate:01-03-2023
     },
     {
        transacId:102,
        transacType:"groceries",
        transacDate:02-03-2023
     },
     {
        transacId:103,
        transacType:"fuel",
        transacDate:03-03-2023
     },
     {
        transacId:104,
        transacType:"medical",
        transacDate:04-03-2023
     },
     {
        transacId:104,
        transacType:"books",
        transacDate:05-03-2023
     },
     {
        transacId:104,
        transacType:"alcohol",
        transacDate:06-03-2023
     },
     {
        transacId:104,
        transacType:"gym",
        transacDate:07-03-2023
     }
]

// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create empty user input
let categ = "";

// question user to enter name
rl.question("Enter category to filter by: \n", function (string) {
  categ = string;
  if(categ=="housing")
  {
      var housing = jsonObject.filter(obj => obj.transacType === "mortgage" || obj.transacType === "property taxes" || obj.transacType === "household repairs");
      console.log(housing);
  }
  if(categ=="travel")
  {
      var travel=jsonObject.filter(obj=> obj.transacType == "car payment"|| obj.transacType == "car warranty"|| obj.transacType == "fuel"|| obj.transacType == "tires"|| obj.transacType == "parking"|| obj.transacType == "repairs"|| obj.transacType == "registration fees"|| obj.transacType == "air tickets"|| obj.transacType == "train tickets");
      console.log(travel);
  }
  if(categ=="food")
  {
      var food=jsonObject.filter(obj=> obj.transacType == "groceries"|| obj.transacType == "restaurants"|| obj.transacType == "pet food");
      console.log(food);
  }
  if(categ=="utilities")
  {
      var utilities=jsonObject.filter(obj=> obj.transacType == "electricity"|| obj.transacType == "water"|| obj.transacType == "garbage"|| obj.transacType == "phones"|| obj.transacType == "cable"|| obj.transacType == "internet"|| obj.transacType == "clothing");
      console.log(utilities);
  }
  if(categ=="medical")
  {
      var medical=jsonObject.filter(obj=>obj.transacType=="medical");
      console.log(medical);
  }
  if(categ=="insurance")
  {
      var insurance=jsonObject.filter(obj=>obj.transacType=="health insurance"|| obj.transacType=="auto insurance"|| obj.transacType=="life insurance"|| obj.transacType=="disability insurance");
      console.log(insurance);
  }
  if(categ=="household items")
  {
      var householdItems=jsonObject.filter(obj=> obj.transacType == "toiletries"|| obj.transacType == "detergent"|| obj.transacType == "cleaning supplies"|| obj.transacType == "tools");
      console.log(householdItems);
  }
  if(categ=="personal")
  {
      var personal=jsonObject.filter(obj=> obj.transacType == "gym"|| obj.transacType == "salon"||  obj.transacType == "cosmetics"|| obj.transacType == "babysitter"|| obj.transacType == "subscriptions");
      console.log(personal);
  }
  if(categ=="debt")
  {
      var debt=jsonObject.filter(obj=> obj.transacType == "personal loans"||  obj.transacType == "student loans"||  obj.transacType == "credit cards");
      console.log(debt);
  }
  if(categ=="retirement")
  {
      var retirement=jsonObject.filter(obj=> obj.transacType == "financial planning"||  obj.transacType == "investing");
      console.log(retirement);
  }
  if(categ=="education")
  {
      var education=jsonObject.filter(obj=> obj.transacType == "college"||  obj.transacType == "school"||  obj.transacType == "books");
      console.log(savings);
  }
  if(categ=="savings")
  {
      var savings=jsonObject.filter(obj=> obj.transacType == "savings"||  obj.transacType == "emergency fund");
      console.log(savings);
  }
  if(categ=="gifts")
  {
      var gifts=jsonObject.filter(obj=> obj.transacType == "birthday"||  obj.transacType == "anniversary"||  obj.transacType == "wedding"||  obj.transacType == "christmas"||  obj.transacType == "special occasions"||  obj.transacType == "charities");
      console.log(gifts);
  }
  if(categ=="entertainment")
  {
      var entertainment=jsonObject.filter(obj=> obj.transacType == "alcohol"||  obj.transacType == "games"||  obj.transacType == "movies"||  obj.transacType == "concerts"||  obj.transacType == "vacations"||  obj.transacType == "subscriptions");
      console.log(entertainment);
  }
  

  // close input stream
  rl.close();
});