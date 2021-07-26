import * as functions from 'firebase-functions';
const universal = require(`${process.cwd()}/dist/pk2-angular/server/main.js`).app;

export const ssr = functions.https.onRequest(universal);