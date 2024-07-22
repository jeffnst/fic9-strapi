require('dotenv').config();
const generateToken = () => {
  const xendit_key = process.env.XENDIT_SECRET_KEY + ':';
  const base64 = Buffer.from(xendit_key).toString('base64');
  return base64;
}

exports.xenditHeaders = {
  'Authorization': 'Basic ' + generateToken(),
  'Content-Type': 'application/json'
}
