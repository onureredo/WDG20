import { readFile } from 'fs/promises';

try {
  const fileContent = await readFile('shrek.txt', 'utf-8');
  console.log(fileContent);
} catch (error) {
  console.error('Ein Fehler: ', error.stack);
}
