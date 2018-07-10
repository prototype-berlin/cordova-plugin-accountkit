const fs = require('fs');

const androidManifest = fs.readFileSync(process.cwd() + '/platforms/android/AndroidManifest.xml', 'utf-8');
const matches = androidManifest.match(/^.*(com.facebook.sdk.ApplicationId).*/gm);

if (matches.length > 1) {
  fs.writeFileSync(process.cwd() + '/platforms/android/AndroidManifest.xml', androidManifest.replace(/^.*(com.facebook.sdk.ApplicationId).*/m,''), 'utf-8');
}