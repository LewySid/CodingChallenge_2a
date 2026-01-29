// Step1: Create and Initialize Variables

let productName = "LightSaber";
let costPerUnit = 12.50;
let basePrice = 19.99;
let discountRate = 0.15;
let salesTaxRate = 0.07;
let fixedMonthlyCosts = 1500;

// Step 2: Calculate Pricing & Profit Mertrics

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

// Step 3: Print To Console

console.log(`Product Name: ${productName}`);
console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
console.log(`Final Price with Tax: $${finalPriceWithTax.toFixed(2)}`);
console.log(`Profit Per Unit: $${profitPerUnit.toFixed(2)}`);
console.log(`Break Even Units: ${breakEvenUnits}`);
console.log(`Per-unit profitablilty: ${isProfitablePerUnit}`);


