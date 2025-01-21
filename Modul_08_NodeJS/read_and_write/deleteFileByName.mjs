import { access, unlink } from 'fs/promises';

export const deleteFileByName = async (filePath) => {
  try {
    await access(filePath);
    await unlink(filePath);
  } catch (error) {
    console.error(error.message);
  }
};

const arg = process.argv[2];

if (arg) {
  deleteFileByName(arg);
}
