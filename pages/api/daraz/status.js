export default async function handler(req,res){ const connected = !!process.env.DARAZ_SELLER_TOKEN; res.status(200).json({connected}); }
