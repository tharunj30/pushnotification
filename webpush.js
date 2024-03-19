const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey: 'BB3bmUkEbd6OHOiWyZCyIanKmMOY7N8zFbjZElSaSCUyveS_wiOSzl_qpplvLSeTWwmhSaIPyE4tVm',
  privateKey: 'auJBmpd1fFNbV6TXp8C4dYHL3yTBiRP64pKBFMzhD5Y'
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
