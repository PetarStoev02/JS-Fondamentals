return "£"+(function compound(balanceAtYearBeginning, amountDepositedPerYear, coeff, pow, interestOnly, initialAmount) {
	return pow // are we on base case or inductive case?
	? compound(
		(balanceAtYearBeginning + amountDepositedPerYear) * coeff, // apply year's interest to starting balance plus deposit
		amountDepositedPerYear,
		coeff,
		pow-1,
		interestOnly,
		initialAmount || balanceAtYearBeginning
		)
	-(interestOnly && amountDepositedPerYear)
	: balanceAtYearBeginning - (interestOnly
                                ? initialAmount
                                : 0)
})(
1000,	// balance with which your account begins (in £)
300*12,	// amount you expect to deposit annually (in £)
1.021,	// coefficient of interest (i.e. 2.1% = 1.021)
5,		// over how many years you are depositing
true	// show just the interest earned (i.e. subtract amount you deposit)
)
.toFixed(2); // returns ~£1275.76 (i.e. you accrue £1275.76 in interest alone if you deposit this much every year)