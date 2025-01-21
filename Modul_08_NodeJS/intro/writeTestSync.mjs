import { writeFileSync } from 'fs';

console.log('Anfang');

try {
  setTimeout(() => writeFileSync('shrek2.txt', 'Dies ist aus der synchronen Operation'), 20000);
  console.log('synchrone Operation erfolgreich');
} catch (error) {
  console.error('Ein Fehler: ', error.message);
}

console.log('Dies sollte zuletzt angezeigt werden');
