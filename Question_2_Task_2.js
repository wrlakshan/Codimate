function highest_spender(customerData) {
  //this is mot handle the if both users have the same highest total spent
  let maxSpendUser = customerData[0];
  for (let i = 1; i < customerData.lenght; i++) {
    if (maxSpendUser.TotalSpend < customerData[i].TotalSpend) {
      maxSpendUser = customerData[i];
    }
  }
  return maxSpendUser;
}
