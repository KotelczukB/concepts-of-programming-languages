type Account struct {
	balance amounts.Amount
}
func NewEmptyAccount() Account {
	amount, _ := amounts.NewAmount(0)
	return NewAccount(amount)
}
func NewAccount(amount amounts.Amount) Account {
	return Account{balance: amount}
}
func (acc Account) Deposit(amount amounts.Amount) Account {
	newAmount, _ := amounts.NewAmount(acc.balance.GetValue() + amount.GetValue())
	acc.balance = newAmount
	return acc
}
acc := accounts.NewEmptyAccount()
acc2 := acc.Deposit(a)
log.Println(acc.GetBalance()) // 0
log.Println(acc2.GetBalance()) // 10