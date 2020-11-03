// Business Logic
function Account(name, depositInitial, deposit, withdraw, total) {
  this.name = name;
  this.depositInitial = depositInitial;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.total = 0;
}

Account.prototype.initialPush = function(newAccount) {
  this.total = this.depositInitial;
}

Account.prototype.depositAmount = function(newAccount) {
  if (isNaN(this.deposit)) {
    this.deposit = 0;
  } else {
    this.total += this.deposit;
  }
  return this.total;
}

Account.prototype.withdrawAmount = function(newAccount) {
  if (isNaN(this.withdraw)) {
    this.withdraw = 0;
  } else {
  this.total -= this.withdraw;
  }
  return this.total;
}

// User Logic
$(document).ready(function() {
  $(".change").submit(function(event) {
    event.preventDefault();

    let name = $("input#name").val();
    let depositInitial = parseInt($("input#initial").val());
    let deposit = parseInt($("input#deposit").val());
    let withdraw = parseInt($("input#withdraw").val());
    let newAccount = new Account(name, depositInitial, deposit, withdraw);
    
    newAccount.initialPush();
    newAccount.depositAmount();
    newAccount.withdrawAmount();
    console.log(newAccount);

    $(".balance").text(newAccount.total);
    
  });
});
