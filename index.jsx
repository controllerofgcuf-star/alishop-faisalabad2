import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home(){
  const [products, setProducts] = useState([]);
  const [connected, setConnected] = useState(false);

  useEffect(()=>{
    setProducts([
      { id:'p1', title:'Classic White Shirt', price:2499, img:'/images/shirt1.svg', sku:'AS-WH-S' },
      { id:'p2', title:'Blue Denim Jacket', price:4599, img:'/images/jacket1.svg', sku:'AS-DJ-M' },
      { id:'p3', title:'Polo T-Shirt', price:1299, img:'/images/polo1.svg', sku:'AS-POLO-L' },
      { id:'p4', title:'Slim Fit Jeans', price:2999, img:'/images/jeans1.svg', sku:'AS-JEANS-32' },
      { id:'p5', title:'Formal Trousers', price:1999, img:'/images/trouser1.svg', sku:'AS-TR-S' },
      { id:'p6', title:'Casual Hoodie', price:3599, img:'/images/hoodie1.svg', sku:'AS-HOOD-M' }
    ]);
    fetch('/api/daraz/status').then(r=>r.json()).then(j=>{ if(j.connected) setConnected(true); }).catch(()=>{});
  },[]);

  function addToCart(p){
    const cart = JSON.parse(localStorage.getItem('cart')||'[]');
    cart.push(p);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart');
  }

  return (
    <div className="container">
      <nav className="nav">
        <h2>AliShop Faisalabad</h2>
        <div style={{marginLeft:'auto'}}>
          <Link href="/"><a style={{marginRight:12}}>Home</a></Link>
          <Link href="/cart"><a style={{marginRight:12}}>Cart</a></Link>
          <Link href="/orders"><a style={{marginRight:12}}>Orders</a></Link>
          <Link href="/contact"><a style={{marginRight:12}}>Contact</a></Link>
          <a href="/api/daraz/auth" className="btn">{connected? 'Connected to Daraz' : 'Connect to Daraz'}</a>
        </div>
      </nav>

      <h1>Clothes — AliShop Faisalabad</h1>
      <p style={{color:'#64748b'}}>Demo store connected to Daraz (full features).</p>

      <section style={{marginTop:18}}>
        <div className="grid">
          {products.map(p=> (
            <div key={p.id} className="card">
              <img src={p.img} alt={p.title} style={{width:'100%', height:160, objectFit:'cover', borderRadius:6}}/>
              <h3 style={{marginTop:8}}>{p.title}</h3>
              <p style={{color:'#475569'}}>SKU: {p.sku}</p>
              <p style={{fontWeight:700, marginTop:6}}>Rs. {p.price}</p>
              <div style={{marginTop:8, display:'flex', gap:8}}>
                <button className="btn" onClick={()=>addToCart(p)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
