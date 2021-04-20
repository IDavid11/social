import { S3 } from "../libs/multer";
import { v4 as uuid } from "uuid";
import path from "path";
import { ManagedUpload } from "aws-sdk/clients/s3";

export const uploadImage = async (file: any): Promise<ManagedUpload.SendData> => {
  const fileName = uuid() + path.extname(file.originalname);
  const uploadResult = await S3.upload({
    Bucket: process.env.BUCKET_NAME || "locallibrary",
    Key: fileName,
    Body: file.buffer,
    ACL: "public-read",
  }).promise();

  return uploadResult;
};
