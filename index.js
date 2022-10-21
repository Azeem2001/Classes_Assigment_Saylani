// Assigment = 1 Class PersonAccount //
function PersonAccount(
  FirstName,
  LastName,
  Income,
  Expenses,
  TotalIncome,
  addIncome,
  AddExpense,
  totalExpense
) {
  this.FirstName = FirstName;
  this.LastName = LastName;
  this.Income = Income;
  this.Expenses = Expenses;
  this.TotalIncome = TotalIncome;
}
PersonAccount.prototype = {
  ExpensesProper: function (totalInc, addInc, addExp, totalExp) {
    this.TotalIncome = totalInc;
    this.addIncome = addInc;
    this.AddExpense = addExp;
    this.totalExpense = totalExp;

    return {
      TotalIncome: this.TotalIncome,
      addIncome: this.addIncome,
      AddExpense: this.AddExpense,
      totalExpense: this.totalExpense,
    };
  },
  Incomes: function (incomes, discription) {
    this.Incomes = incomes;
    this.discription = discription;

    return {
      Incomes: this.Incomes,
      discription: this.discription,
    };
  },
  OverAllExpense: function (overallxxpense, Expdiscription) {
    this.overallxxpense = overallxxpense;
    this.Expdiscription = Expdiscription;

    return {
      Incomes: this.overallxxpense,
      Expdiscription: this.Expdiscription,
    };
  },
};

let newPerson = new PersonAccount("Syed", "Azeem", 4000, 50, 150, 100);
newPerson.ExpensesProper(100, 2500, 520, 20);
newPerson.Incomes("5000", "kuch nahi bachta");
newPerson.OverAllExpense("3500", "kuch tw bacha");
console.log(newPerson);

let newPerson1 = new PersonAccount("Syed", "Zia", 4000, 50, 150, 100);
newPerson1.ExpensesProper(100, 2500, 520, 20);
newPerson1.Incomes("5000", "kuch nahi bachta");
newPerson1.OverAllExpense("3500", "kuch tw bacha");
console.log(newPerson1);

// Assigment = 2 Class AutoCar //




function AutoCar(name, model, color) {
  this.name = name;
  this.model = model;
  this.color = color;
}
AutoCar.prototype = {
  Cartype: function (typesCar) {
    this.typesCar = typesCar;
    if (typesCar === "auto") {
      this.typesCar = "auto Car";
    } else {
      this.typesCar = "Mannual Car";
    }
    return { typesCar: this.typesCar };
  },
  Start: function (startCar) {
    this.startCar = startCar;
    if (startCar === "start") {
      this.startCar = "log Car is ready for drive";
    } else {
      this.startCar = "plz start the Car";
    }
    return { start: this.startCar };
  },
  Opendoor: function (opendoor) {
    this.opendoor = opendoor;
    if (opendoor === "opendoor") {
      this.opendoor = "logs door is Open";
    } else {
      this.opendoor = "plz close the door";
    }
    return { opendoor: this.opendoor };
  },
  ChildClasses: function (MultipleCarName, ExtraInformation, MultipleMaxSpeed) {
    this.MultipleCarName = MultipleCarName;
    this.ExtraInformation = ExtraInformation;
    this.MultipleMaxSpeed = MultipleMaxSpeed;

    return {
      MultipleCarName: this.MultipleCarName,
      ExtraInformation: this.ExtraInformation,
      MultipleMaxSpeed: this.MultipleMaxSpeed,
    };
  },
};
let Automobile1 = new AutoCar("Civic", 2019, "Black");
Automobile1.Cartype("auto");
Automobile1.Start("start");
Automobile1.Opendoor();
Automobile1.ChildClasses("truk,suzuki,Bus", "auto matic glass", 120);
console.log(Automobile1);
let Automobile2 = new AutoCar("Hondai", 2020, "BLue");
Automobile2.Cartype("Mannual");
Automobile2.Start("close");
Automobile2.Opendoor();
Automobile2.ChildClasses("truk,suzuki,Bus", "auto matic glass", 180);

console.log(Automobile2);
