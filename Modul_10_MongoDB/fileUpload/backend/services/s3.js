import pkg from 'aws-sdk';
const { S3 } = pkg;

const s3 = new S3({
  apiVersion: '2006-03-01',
  accessKeyId: process.env.S3_ID,
  secretAccessKey: process.env.S3_SECRET,
  endpoint: 'https://s3.filebase.com',
  region: 'us-east-1',
  s3ForcePathStyle: true,
});

export default s3;
