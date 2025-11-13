import fetch from 'node-fetch';
export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).json({error:'Method not allowed'});
  const body = req.body;
  try{
    const sellerToken = process.env.DARAZ_SELLER_TOKEN || null;
    if(!sellerToken) return res.status(400).json({error:'Daraz seller not connected. Complete OAuth and store seller token.'});
    // Build the order payload per Daraz API docs and POST to Daraz order create endpoint with proper signing.
    // For demo, return a fake order id and also save order locally (for demo UX store orders in localStorage via client)
    return res.status(200).json({ ok:true, order_id: 'DEMO-ORDER-001' });
  }catch(err){
    return res.status(500).json({ error: err.message });
  }
}
