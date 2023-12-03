/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const uniqueCategories = new Set();

  transactions.forEach(transaction => {
    const { category } = transaction;
    uniqueCategories.add(category);
  });

  const totalSpentByCategory = [];

  uniqueCategories.forEach(category => {
    const total = transactions
      .filter(transaction => transaction.category === category)
      .reduce((acc, curr) => acc + curr.price, 0);

    totalSpentByCategory.push({ category, totalSpent: total });
  });

  return totalSpentByCategory;
}

module.exports = calculateTotalSpentByCategory;
