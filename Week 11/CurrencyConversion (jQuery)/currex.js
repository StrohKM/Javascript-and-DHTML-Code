// Mapping of all currency abbreviations to full currency name
var allCurrencies = {
  "AED": "United Arab Emirates Dirham",
  "AFN": "Afghan Afghani",
  "ALL": "Albanian Lek",
  "AMD": "Armenian Dram",
  "ANG": "Netherlands Antillean Guilder",
  "AOA": "Angolan Kwanza",
  "ARS": "Argentine Peso",
  "AUD": "Australian Dollar",
  "AWG": "Aruban Florin",
  "AZN": "Azerbaijani Manat",
  "BAM": "Bosnia-Herzegovina Convertible Mark",
  "BBD": "Barbadian Dollar",
  "BDT": "Bangladeshi Taka",
  "BGN": "Bulgarian Lev",
  "BHD": "Bahraini Dinar",
  "BIF": "Burundian Franc",
  "BMD": "Bermudan Dollar",
  "BND": "Brunei Dollar",
  "BOB": "Bolivian Boliviano",
  "BRL": "Brazilian Real",
  "BSD": "Bahamian Dollar",
  "BTC": "Bitcoin",
  "BTN": "Bhutanese Ngultrum",
  "BWP": "Botswanan Pula",
  "BYN": "Belarusian Ruble",
  "BZD": "Belize Dollar",
  "CAD": "Canadian Dollar",
  "CDF": "Congolese Franc",
  "CHF": "Swiss Franc",
  "CLF": "Chilean Unit of Account (UF)",
  "CLP": "Chilean Peso",
  "CNH": "Chinese Yuan (Offshore)",
  "CNY": "Chinese Yuan",
  "COP": "Colombian Peso",
  "CRC": "Costa Rican Colón",
  "CUC": "Cuban Convertible Peso",
  "CUP": "Cuban Peso",
  "CVE": "Cape Verdean Escudo",
  "CZK": "Czech Republic Koruna",
  "DJF": "Djiboutian Franc",
  "DKK": "Danish Krone",
  "DOP": "Dominican Peso",
  "DZD": "Algerian Dinar",
  "EGP": "Egyptian Pound",
  "ERN": "Eritrean Nakfa",
  "ETB": "Ethiopian Birr",
  "EUR": "Euro",
  "FJD": "Fijian Dollar",
  "FKP": "Falkland Islands Pound",
  "GBP": "British Pound Sterling",
  "GEL": "Georgian Lari",
  "GGP": "Guernsey Pound",
  "GHS": "Ghanaian Cedi",
  "GIP": "Gibraltar Pound",
  "GMD": "Gambian Dalasi",
  "GNF": "Guinean Franc",
  "GTQ": "Guatemalan Quetzal",
  "GYD": "Guyanaese Dollar",
  "HKD": "Hong Kong Dollar",
  "HNL": "Honduran Lempira",
  "HRK": "Croatian Kuna",
  "HTG": "Haitian Gourde",
  "HUF": "Hungarian Forint",
  "IDR": "Indonesian Rupiah",
  "ILS": "Israeli New Sheqel",
  "IMP": "Manx pound",
  "INR": "Indian Rupee",
  "IQD": "Iraqi Dinar",
  "IRR": "Iranian Rial",
  "ISK": "Icelandic Króna",
  "JEP": "Jersey Pound",
  "JMD": "Jamaican Dollar",
  "JOD": "Jordanian Dinar",
  "JPY": "Japanese Yen",
  "KES": "Kenyan Shilling",
  "KGS": "Kyrgystani Som",
  "KHR": "Cambodian Riel",
  "KMF": "Comorian Franc",
  "KPW": "North Korean Won",
  "KRW": "South Korean Won",
  "KWD": "Kuwaiti Dinar",
  "KYD": "Cayman Islands Dollar",
  "KZT": "Kazakhstani Tenge",
  "LAK": "Laotian Kip",
  "LBP": "Lebanese Pound",
  "LKR": "Sri Lankan Rupee",
  "LRD": "Liberian Dollar",
  "LSL": "Lesotho Loti",
  "LYD": "Libyan Dinar",
  "MAD": "Moroccan Dirham",
  "MDL": "Moldovan Leu",
  "MGA": "Malagasy Ariary",
  "MKD": "Macedonian Denar",
  "MMK": "Myanma Kyat",
  "MNT": "Mongolian Tugrik",
  "MOP": "Macanese Pataca",
  "MRO": "Mauritanian Ouguiya (pre-2018)",
  "MRU": "Mauritanian Ouguiya",
  "MUR": "Mauritian Rupee",
  "MVR": "Maldivian Rufiyaa",
  "MWK": "Malawian Kwacha",
  "MXN": "Mexican Peso",
  "MYR": "Malaysian Ringgit",
  "MZN": "Mozambican Metical",
  "NAD": "Namibian Dollar",
  "NGN": "Nigerian Naira",
  "NIO": "Nicaraguan Córdoba",
  "NOK": "Norwegian Krone",
  "NPR": "Nepalese Rupee",
  "NZD": "New Zealand Dollar",
  "OMR": "Omani Rial",
  "PAB": "Panamanian Balboa",
  "PEN": "Peruvian Nuevo Sol",
  "PGK": "Papua New Guinean Kina",
  "PHP": "Philippine Peso",
  "PKR": "Pakistani Rupee",
  "PLN": "Polish Zloty",
  "PYG": "Paraguayan Guarani",
  "QAR": "Qatari Rial",
  "RON": "Romanian Leu",
  "RSD": "Serbian Dinar",
  "RUB": "Russian Ruble",
  "RWF": "Rwandan Franc",
  "SAR": "Saudi Riyal",
  "SBD": "Solomon Islands Dollar",
  "SCR": "Seychellois Rupee",
  "SDG": "Sudanese Pound",
  "SEK": "Swedish Krona",
  "SGD": "Singapore Dollar",
  "SHP": "Saint Helena Pound",
  "SLL": "Sierra Leonean Leone",
  "SOS": "Somali Shilling",
  "SRD": "Surinamese Dollar",
  "SSP": "South Sudanese Pound",
  "STD": "São Tomé and Príncipe Dobra (pre-2018)",
  "STN": "São Tomé and Príncipe Dobra",
  "SVC": "Salvadoran Colón",
  "SYP": "Syrian Pound",
  "SZL": "Swazi Lilangeni",
  "THB": "Thai Baht",
  "TJS": "Tajikistani Somoni",
  "TMT": "Turkmenistani Manat",
  "TND": "Tunisian Dinar",
  "TOP": "Tongan Pa'anga",
  "TRY": "Turkish Lira",
  "TTD": "Trinidad and Tobago Dollar",
  "TWD": "New Taiwan Dollar",
  "TZS": "Tanzanian Shilling",
  "UAH": "Ukrainian Hryvnia",
  "UGX": "Ugandan Shilling",
  "USD": "United States Dollar",
  "UYU": "Uruguayan Peso",
  "UZS": "Uzbekistan Som",
  "VEF": "Venezuelan Bolívar Fuerte",
  "VND": "Vietnamese Dong",
  "VUV": "Vanuatu Vatu",
  "WST": "Samoan Tala",
  "XAF": "CFA Franc BEAC",
  "XAG": "Silver Ounce",
  "XAU": "Gold Ounce",
  "XCD": "East Caribbean Dollar",
  "XDR": "Special Drawing Rights",
  "XOF": "CFA Franc BCEAO",
  "XPD": "Palladium Ounce",
  "XPF": "CFP Franc",
  "XPT": "Platinum Ounce",
  "YER": "Yemeni Rial",
  "ZAR": "South African Rand",
  "ZMW": "Zambian Kwacha",
  "ZWL": "Zimbabwean Dollar"
};

// Initial data for exchange rates
var exchangeRates = {
  "disclaimer": "Usage subject to terms: https://openexchangerates.org/terms",
  "license": "https://openexchangerates.org/license",
  "timestamp": 1534107604,
  "base": "USD",
  "rates": {
    "BTC": 0.000157753542,
    "CAD": 1.316853,
    "EUR": 0.879353,
    "JPY": 110.46550427,
    "USD": 1,
  }
};

//step-1: Create a jQuery ready listener that updates the options within the <select> element with ID toCurrency
//by calling updateCurrencyDropdown() method
$(function()
{
  updateCurrencyDropdown();
});
//step-2: Create a jQuery change listener for the US dollar input, 
//use convertCurrency() function as the event handler
	$('#usdInput').on('change', convertCurrency);

//step-3: Create a jQuery change listener for the selected option in the dropdown list, 
//use convertCurrency()function as the event handler   
	$('#toCurrency').on('change', convertCurrency);
   

//step-4: Create a jQuery click listener for the Update Rates button, 
//use updateRates() function as the event handler   
$('#updateRates').on('click', updateRates);


//Define updateCurrencyDropDown() function to update currency dropdown list 
//to only list currency in the exchange rate object, 
/*  add jQuery code (i.e, use jQuery selectors and jQuery methods) to complete the following tasks:
1.	The first <option> element is: <option value="" disabled selected>Select currency</option>
2.	Only the currencies listed in the rates property of the exchangeRates object should appear in the dropdown
3.	The <option> element for each currency should show the full currency name followed by the currency's abbreviation in parentheses 
	Ex: Canadian Dollar (CAD)
4.	The value for each <option> element should be the currency abbreviation
5.	The allCurrencies object in the provided JavaScript template provides a mapping from all possible abbreviations to full currency name

*/
function updateCurrencyDropdown() {
  let selectHTML ="<option value='' disabled selected>Select currency</option>";
  // object is the exchange rate
  // use for...in.. loop to access data in an object 
  //Key value pair in var exchangeRates  "BTC:" 000157753542
  // currencyAbr = currency abbreviation
  for (const currencyAbr in exchangeRates.rates)
  {
    selectHTML += `<option value='${currencyAbr}'>${allCurrencies[currencyAbr]} (${currencyAbr})</option>`;
  }
  
  $('#toCurrency').html(selectHTML);
}


//Define convertCurrency() function to perform currency conversion (from US dollars to other currency), 
/*  add jQuery code (i.e, use jQuery selectors and jQuery methods) to complete the following tasks:
1.	Converts the user-entered US dollars to the selected currency using the rates listed in the exchangeRates object. 
Display the converted currency with two decimal digits. 
	Ex: If the user-entered US dollars is 100.00, Canadian Dollar (CAN) is elected, and the exchange rate is "CAD": 1.316853, 
the resulting converted currency is 131.69
2.	Displays the resulting converted currency by updating the readonly <input> element with ID resultCurrency
3.	Updates the associated label for resultCurrency to the selected currency's full currency name, currency abbreviation 
in parentheses, and colon 
	Ex: Canadian Dollar (CAN):
*/
function convertCurrency() 
{   
  //  Get US dollar input from input box with id="usedInput"
  const usDollars = parseFloat($('#usdInput').val());
  if(isNaN(usDollars) || usDollars < 0)
  {
    alert("Invalid Input");
    return;
  }

  // if user input dollars is valid
  // get user selected currency from the dropdown list <select id="toCurrency"></select>
  const selectOption = $("#toCurrency").val();

  // get corresponding exchange rate from exchangeRate object based on selected currency option
  const convRate = exchangeRates.rates[selectOption];

  // perform conversion
  const result = convRate * usDollars;

  // display the result in the page
  $("#resultCurrency").val(result.toFixed(2));

  // update the label
  $('#resultLabel').text(`${allCurrencies[selectOption]}(${selectOption})`);
}


//Define updateRate() function to update rates, dropdown list, and conversion
/*add jQuery code (i.e, use jQuery selectors and jQuery methods) to complete the following tasks:
1.	Updates the exchangeRates object using the JSON string provided in the <textarea> element with ID exchangeRates
2.	Updates the select dropdown such that only the currencies listed in the rates property of the updated exchangeRates
 object appear in the dropdown
3.	Resetss the readonly <input> element with ID resultCurrency to display "---.--"
4.	Resets the associated label for resultCurrency to display "To Currency ():"

*/
function updateRates() 
{
	// get new exchange rates from id="exchangeRates"
  let exchangeRatesJSON = $("#exchangeRates").val();

  // update exchange rate object
  exchangeRates = JSON.parse(exchangeRatesJSON);

  // update currency dropdown
  updateCurrencyDropdown();

  // reset label and value for converted currency
  $('#resultLabel').text('To Currency ():');
  $('#resultCurrency').val('---.---');
}



