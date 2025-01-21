import { access, mkdir, appendFile } from 'fs/promises';
import path from 'path';

export const createFileWithMessage = async (msg) => {
  const date = new Date();
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const d = date.getDate().toString().padStart(2, '0');
  const dirName = `./${y}-${m}-${d}`;

  try {
    await access(dirName);
  } catch (error) {
    await mkdir(dirName);
  }

  const h = date.getHours().toString().padStart(2, '0');
  const min = date.getMinutes().toString().padStart(2, '0');
  const fileName = `${h}-${min}.txt`;

  const filePath = path.join(dirName, fileName);

  try {
    await appendFile(filePath, msg + '\n');
    return fileName;
  } catch (error) {
    console.error(error.stack);
  }
};

// console.log(process.argv.slice(2));
const args = process.argv[2];

if (args) {
  createFileWithMessage(args);
}
