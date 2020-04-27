"use strict"

class BankAccount{
  constructor(accountNumber, owner){
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactionList = [];
  }
 
  balance(){
    let balance = 0
    if(this.transactionList.length == 0){
      return `${this.owner} has no activity, the balance is ${balance}`
    } else{
      for(let i = 0; i< this.transactionList.length; i++){
        balance = balance + this.transactionList[i].amount;
      }
         return `${this.owner} has a balance of ${balance}`;
    } 
  }

  deposit(amount){
    if (amount <= 0){
      console.log("cant add zero or less money")
      return `cant add negative or no money`
    } else {
      let Amount = new transaction(null, amount, this.owner)
      this.transactionList.push(Amount)
    }
  }

  charge(payee, amount){
    let balance = 0; 
    for(let i = 0; i < this.transactionList.length; i++){
      balance = balance + this.transactionList[i].amount;
    }
    if (amount < balance ){
      let Amount = new transaction(null,(-amount), payee)
      this.transactionList.push(Amount)
    } else {
      console.log(`Dont have enough money`)
      return `Don't have enough money`
    }
  }
}

class transaction{
  constructor(date, amount, payee) {
    this.date = date;
    this.amount = amount;
    this.payee = payee;
  }
}

let acct1 = new BankAccount("5553429", "John Doe");

console.log(acct1.accountNumber);  // 5553429
console.log(acct1.owner); // John Doe
console.log(acct1.balance()) // 0


acct1.deposit(100)
console.log(acct1.balance()) // 100
acct1.deposit(-200)  // should not be allowed
console.log(acct1.balance()) // 100

acct1.charge("Target", 30.50)
console.log(acct1.balance())
acct1.charge("FreeBirds", 15.15)
console.log(acct1.balance())  //54.35
console.log(acct1.transactionList)
acct1.charge("Diamond Shop", 1000) // should not be allowed
console.log(acct1.balance())  //54.35

acct1.charge("Targe", -20) //refund
console.log(acct1.balance())  //74.35