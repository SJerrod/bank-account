// Business Logic
function Account(name, depositInitial, total) {
  this.name = name;
  this.depositInitial = depositInitial;
  this.total = 0;
}

function Change(deposit, withdraw) {
  this.deposit = deposit;
  this.withdraw = withdraw;
}

Account.prototype.initialPush = function(newAccount) {
  this.total = this.depositInitial;
}

Account.prototype.depositAmount = function(change) {
  if (isNaN(change.deposit)) {
    change.deposit = 0;
  } else {
    this.total += change.deposit;
  }
  return this.total;
}

Account.prototype.withdrawAmount = function(change) {
  if (isNaN(change.withdraw)) {
    change.withdraw = 0;
  } else {
  this.total -= change.withdraw;
  }
  return this.total;
}

// User Logic
$(document).ready(function() {
  $(".initial").submit(function(event) {
    event.preventDefault();

    let name = $("input#name").val();
    let depositInitial = parseInt($("input#initial").val());
    let newAccount = new Account(name, depositInitial);
    
    newAccount.initialPush();
    $(".userName").text(newAccount.name);
    $(".balance").text("$" + newAccount.total + ".00");
    $("#initialSubmit").hide();
    $(".container-1").show();
    $(".change").submit(function(event) {
      event.preventDefault();
      
      let deposit = parseInt($("input#deposit").val());
      let withdraw = parseInt($("input#withdraw").val());
      let change = new Change(deposit, withdraw);
      
      newAccount.depositAmount(change);
      newAccount.withdrawAmount(change);
      $("input#deposit").val("");
      $("input#withdraw").val("");
      
      $(".balance").text("$" + newAccount.total + ".00"); 
    });
  });
});
