import { v2 as cloudinary } from 'cloudinary';

// Configure your cloud name, API key and API secret:

const myconfig = cloudinary.config({
  cloud_name: 'dlc5erxkj',
  api_key: '822196862469827',
  api_secret: '_L65yMKn-jr_UHUPyMzRtlHNjAs',
  secure: true
});

const _myconfig = myconfig;
export { _myconfig as myconfig };
