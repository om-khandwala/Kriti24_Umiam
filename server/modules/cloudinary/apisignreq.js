import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dlc5erxkj',
  api_key: '822196862469827',
  api_secret: '_L65yMKn-jr_UHUPyMzRtlHNjAs',
  secure: true
});

const apiSecret = cloudinary.config().api_secret;

// Server-side function used to sign an upload with a couple of
// example eager transformations included in the request.
const signuploadforms = () => {
  const timestamp = Math.round((new Date).getTime()/1000);

  const signature = cloudinary.utils.api_sign_request({
    timestamp: timestamp,
    eager: 'c_pad,h_300,w_400|c_crop,h_200,w_260',
    folder: 'signed_upload_demo_form'}, apiSecret);

  return { timestamp, signature }
}

export default {
  signuploadforms
}