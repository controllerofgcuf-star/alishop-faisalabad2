import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function OrdersPage(){
  const [orders, setOrders] = useState([]);

  useEffect(()=>{
    // For demo: load orders from localStorage
    const o = JSON.parse(localStorage.getItem('orders')||'[]');
    setOrders(o);
  },[]);

  return (
    <div className="container">
      <nav className="nav"><h2>AliShop Faisalabad</h2><div style={{marginLeft:'auto'}}><Link href="/"><a style={{marginRight:12}}>Home</a></Link><Link href="/cart"><a>Cart</a></Link></div></nav>
      <h1>Your Orders</h1>
      <div style={{marginTop:12}}>
        {orders.length===0 ? <p>No orders yet.</p> : (
          <div className="card">
            <ul>
              {orders.map((o,i)=>(
                <li key={i} style={{padding:'8px 0'}}>
                  <strong>Order ID:</strong> {o.id} — <strong>Items:</strong> {o.items.map(it=>it.title).join(', ')} — <strong>Status:</strong> {o.status}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
