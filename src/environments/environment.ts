// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDPlp-FJJm9KjIop8LzMrcx3lLEQh9K-zQ",
    authDomain: "pickapptest-285d6.firebaseapp.com",
    databaseURL: "https://pickapptest-285d6.firebaseio.com",
    projectId: "pickapptest-285d6",
    storageBucket: "pickapptest-285d6.appspot.com",
    messagingSenderId: "702147921064",
    appId: "1:702147921064:web:3b44097bdf5b6e0f8a6e9d",
    measurementId: "G-Z4C0TJD5FX"
  },
  onesignal: {
    appId: 'e3136d86-714c-4c49-a451-1d4a88d1a1dd',
    googleProjectNumber: '702147921064',
    restKey: 'YzM0NjMwOGMtYmIwMy00ZDY2LTg5ZGQtNWQ3NTY4YmJkYjgy'
  },
  stripe: {
    sk: 'sk_test_51HbAIPFOhI5Fqjyd6UnOgvELuSBecbqfT42VCRYIe8cGvHHqmdRR5imTMa1yC1w4thqo4UUzpy8AMWp1apix1tYF00VI8ZTABN'
  },
  paypal: {
    sandbox: '',
    production: 'YOUR_PRODUCTION_CLIENT_ID'
  },
  general: {
    symbol: 'RD$',
    code: 'DOP'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.