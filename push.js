var push = require('web-push');
const vapidKeys = push.generateVAPIDKeys();

// Prints 2 URL Safe Base64 Encoded Strings
console.log(vapidKeys.publicKey, vapidKeys.privateKey);