export default async function handler(req,res){
  const appKey = process.env.DARAZ_APP_KEY;
  const redirect = encodeURIComponent(process.env.DARAZ_REDIRECT_URI || 'http://localhost:3000/api/daraz/oauth-callback');
  const url = `https://auth.lazada.com/oauth/authorize?response_type=code&client_id=${appKey}&redirect_uri=${redirect}&scope=all`;
  res.writeHead(302, { Location: url });
  res.end();
}
