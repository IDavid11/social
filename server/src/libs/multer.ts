import AWS from "aws-sdk";
import multer from "multer";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.BUCKET_REGION,
});

export const S3 = new AWS.S3({});

const multerMemoryStorage = multer.memoryStorage();
export const storage = multer({
  storage: multerMemoryStorage,
});
