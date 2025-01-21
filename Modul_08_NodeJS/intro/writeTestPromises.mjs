import { writeFile } from 'fs/promises';

const asyncOperation = async () => {
  try {
    await writeFile('promisesTest.txt', 'Dies ist aus der Promises Test');
    console.log('Operation erfolgreich abgeschlossen');
  } catch (err) {
    console.error('Ein Fehler ist aufgetreten: ', err.message);
  }
};

asyncOperation().then(() => console.log('im then block'));

console.log('Nach dem trycatch-Block');
