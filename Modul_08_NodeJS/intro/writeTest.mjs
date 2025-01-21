import { writeFile } from 'fs';

writeFile('shrek.txt', 'Shrek is love, Shrek is life', (err) => {
  if (err) {
    console.error('there was an error:', err.message);
  } else {
    console.log('successfully created shrek.txt');
  }
});

console.log(`Technically speaking, if the creation of the file takes a bit, 
we will see this in the console before the completion message!`);
