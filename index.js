let transactions = require('./transactions.json')

const sort = (transactions) => {
  return transactions.sort((i1, i2) => {
    var sourceAccount = (i1.sourceAccount.localeCompare(i2.sourceAccount)) * 100;
    var targetAccount = (i1.targetAccount.localeCompare(i2.targetAccount)) * 10;

    return sourceAccount + targetAccount;
  })
}

const findDuplicates = (transactions) => {
  console.log(sort(transactions));
}

findDuplicates(transactions);