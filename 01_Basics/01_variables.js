const accountId = 122335
let accountEmail = "joel@google.com"
var accountPassword = "12345"
accountCity = "Margao"
let accountState;

// accountId = 69 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "67890"
accountCity = "Bangaluru"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


/*
prefer not to use var
because of issue in block scope and functional scope
*/