const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey: 'BOVgebGAw2hPI_XamiQbZi8ggBZVo3NSGw8Tlex2cNWnuuMciazp-DpfnT4-1LLAqKBMPcqLmilM2QdALhp2mok',
  privateKey: '3WWHP0IS6exWrKSaYQaAmDDR-I7JtlH-0A8JyeZV30M'
}

webpush.setVapidDetails(
  'mailto:tharunkumar200230@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
