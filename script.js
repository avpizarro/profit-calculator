// Get the input variables from the DOM
let currentCustomers = document.getElementById('current-customers');
let newOpportunities = document.getElementById('new-opportunities');
let retentionRate = document.getElementById('retention-rate');
let conversionRate = document.getElementById('conversion-rate');
let transactionsAmount = document.getElementById('transactions-amount');
let transactionValue = document.getElementById('transaction-value');
let costOfSales = document.getElementById('cost-of-sales');
let operatingExpenses = document.getElementById('operating-expenses');

// Get the variables to display the results from the DOM
let retainedCustomers = document.getElementById('retained-customers');
let newCustomers = document.getElementById('new-customers');
let totalCustomers = document.getElementById('total-customers');
let sales = document.getElementById('sales');
let grossProfit = document.getElementById('gross-profit');
let netProfit = document.getElementById('net-profit');

// Helper function to multiply and display the value
function multiplyTwoValues(a, b, c) {
  let result = +a * +b;
  return c.innerHTML = Math.floor(result);
}

// Helper function to add and display two values
function addAndDisplay(a, b, c) {
  let result = +a + +b;
  console.log(result);
  return c.innerHTML = Math.floor(result);
}

// Calculate the number of retained customers
let cus = 0;
let retRate = 0;

let newCus = 0;
let convRate = 0;

let transAmount = 0;
let transValue = 0;


let salesCost = 0;
let opExp = 0;

let totalSales = 0;
let totalGrossProfit = 0;
let totalProfit = 0;


const getCurrentCus = () => {
  cus = currentCustomers.value;
  multiplyTwoValues(cus, retRate, retainedCustomers);
  addAndDisplay(cus*retRate, newCus*convRate, totalCustomers);
}

const getRetRate = () => {
  retRate = retentionRate.value / 100;
  multiplyTwoValues(cus, retRate, retainedCustomers);
  addAndDisplay(cus*retRate, newCus*convRate, totalCustomers);
}

// Calculate the number of new opportunities
const getNewCus = () => {
  newCus = newOpportunities.value;
  multiplyTwoValues(newCus, convRate, newCustomers);
  addAndDisplay(cus*retRate, newCus*convRate, totalCustomers);
}

const getConvRate = () => {
  convRate = conversionRate.value / 100;
  multiplyTwoValues(newCus, convRate, newCustomers);
  addAndDisplay(cus*retRate, newCus*convRate, totalCustomers);
}

// Calculate the number of new opportunities
const getTransAmount = () => {
  transAmount = transactionsAmount.value;
  setSales();
}

const getTransValue = () => {
  transValue = transactionValue.value;
  setSales();
}

const setSales = () => {
  let totalCus = +cus * +retRate + +newCus * +convRate;
  totalSales = totalCus * +transAmount * +transValue;
  return sales.innerHTML = totalSales;
}

const getCostOfSales = () => {
  salesCost = costOfSales.value;
  setGrossProfit();
  console.log(salesCost);
}

const getOperatingExpenses = () => {
  opExp = operatingExpenses.value;
  setNetProfit();
  console.log(opExp);
}

const setGrossProfit = () => {
  totalGrossProfit = totalSales - +salesCost;
  return grossProfit.innerHTML = totalGrossProfit;
}

const setNetProfit = () => {
  totalProfit = totalGrossProfit - +opExp;
  return netProfit.innerHTML = totalProfit;
}

