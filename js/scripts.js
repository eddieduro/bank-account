function BankAccount (accountName, balance, firstDeposit, withDrawal) {
  var balance;
  this.accountName = accountName;
  this.balance = balance;
  this.firstDeposit = firstDeposit;
  this.withDrawal = withDrawal;
  return balance;
}

BankAccount.prototype.initialDeposit = function(){
  return this.balance + this.firstDeposit;
}

BankAccount.prototype.withDrawalamount = function () {
  return this.balance - this.withDrawal;
}

$(document).ready(function() {
  $('form#new-account').submit(function(event){
    event.preventDefault();
    var inputtedAccountName = $('input#name').val();
    var inputtedInitialDeposit = parseInt($("input#initial-deposit").val());
    var inputtedWithDrawal = parseInt($("input#withdrawal").val());

    var newAccount = new BankAccount(inputtedAccountName, 0, inputtedInitialDeposit, inputtedWithDrawal);

  });
});
