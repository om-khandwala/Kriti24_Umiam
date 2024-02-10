import { Router } from 'express';
const router = Router();
import signuploadform from '../modules/cloudinary/apisignreq.js';
import { v2 as cloudinary } from 'cloudinary';

const cloudName = cloudinary.config().cloud_name;
const apiKey = cloudinary.config().api_key;

// using this API should require authentication
router.get('/', function (req, res, next) {
  const sig = signuploadform.signuploadforms()
  res.json({
    signature: sig.signature,
    timestamp: sig.timestamp,
    cloudname: cloudName,
    apikey: apiKey
  })
})

export default router