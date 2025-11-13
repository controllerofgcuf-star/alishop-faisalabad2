import fetch from 'node-fetch';
export default async function handler(req,res){
  const { code } = req.query;
  if(!code) return res.status(400).send('Missing code');
  // TODO: Exchange code for access_token using Daraz API (signed request) and store token securely.
  res.send('Authorization received. Implement token exchange on server to store seller token.');
}
