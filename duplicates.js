const sort = (transactions) => {
  return transactions.sort((i1, i2) => {
    var sourceAccount = (i1.sourceAccount.localeCompare(i2.sourceAccount)) * 10000;
    var targetAccount = (i1.targetAccount.localeCompare(i2.targetAccount)) * 1000;
    var category = (i1.category.localeCompare(i2.category)) * 100;
    var time = (Math.max(Math.min(new Date(i1.time) - new Date(i2.time), 1), -1)) * 1;
    var amount = Math.max(Math.min(+i1.amount - +i2.amount, 1), -1) * 10;

    return time + sourceAccount + targetAccount + category + amount;
  })
}

const map = (transactions) => {
  let res = {};
  transactions.forEach((i) => {
    let key = i.sourceAccount + i.targetAccount + i.category + i.amount;
    let last;

    if (res[key]) {
      last = res[key][res[key].length - 1];

      if (Math.abs(new Date(last.time) - new Date(i.time)) < 60000) {
        res[key].push(i);
      }
    } else {
      res[key] = [i];
    }
  });

  return Object.values(res).filter(i => i.length > 1);
}

const findDuplicates = (transactions) => {
  return map(sort(transactions));
}

exports.findDuplicates = findDuplicates;