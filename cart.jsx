import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CartPage(){
  const [cart, setCart] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(()=>{
    setCart(JSON.parse(localStorage.getItem('cart')||'[]'));
  },[]);

  function remove(i){
    const c = cart.filter((_,idx)=>idx!==i);
    setCart(c);
    localStorage.setItem('cart', JSON.stringify(c));
  }

  async function checkout(){
    if(cart.length===0) { setMsg('Cart is empty'); return; }
    setMsg('Placing order...');
    try{
      const res = await fetch('/api/daraz/create-order', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ items: cart, customer: { name:'Test Buyer', phone:'03000000000', address:'House #, Street, Faisalabad' } })
      });
      const j = await res.json();
      if(res.ok) { setMsg('Order placed. ID: '+ j.order_id); localStorage.removeItem('cart'); setCart([]); }
      else setMsg('Error: '+(j.error||JSON.stringify(j)));
    }catch(err){ setMsg('Network error: '+ err.message); }
  }

  return (
    <div className="container">
      <nav className="nav"><h2>AliShop Faisalabad</h2><div style={{marginLeft:'auto'}}><Link href="/"><a style={{marginRight:12}}>Home</a></Link><Link href="/contact"><a>Contact</a></Link></div></nav>
      <h1>Your Cart</h1>
      <div style={{marginTop:12}}>
        {cart.length===0 ? <p>No items in cart.</p> : (
          <div className="card">
            <ul>
              {cart.map((c,i)=>(
                <li key={i} style={{display:'flex', justifyContent:'space-between', padding:'8px 0'}}>
                  <span>{c.title} — Rs. {c.price}</span>
                  <button onClick={()=>remove(i)} className="btn-ghost">Remove</button>
                </li>
              ))}
            </ul>
            <div style={{marginTop:12}}>
              <button onClick={checkout} className="btn">Checkout (Place Order via Daraz)</button>
            </div>
            <p style={{marginTop:8}}>{msg}</p>
          </div>
        )}
      </div>
    </div>
  );
}
