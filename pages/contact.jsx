import Link from 'next/link';
import { useState } from 'react';

export default function Contact(){
  const [msg, setMsg] = useState('');
  const [form, setForm] = useState({name:'', email:'', message:''});

  function submit(e){
    e.preventDefault();
    setMsg('Thank you! We received your message.');
    setForm({name:'',email:'',message:''});
  }

  return (
    <div className="container">
      <nav className="nav"><h2>AliShop Faisalabad</h2><div style={{marginLeft:'auto'}}><Link href="/"><a style={{marginRight:12}}>Home</a></Link><Link href="/cart"><a>Cart</a></Link></div></nav>
      <h1>Contact Us</h1>
      <div style={{maxWidth:700}} className="card">
        <form onSubmit={submit}>
          <div style={{marginBottom:8}}><label>Name</label><br/><input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={{width:'100%',padding:8}}/></div>
          <div style={{marginBottom:8}}><label>Email</label><br/><input required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={{width:'100%',padding:8}}/></div>
          <div style={{marginBottom:8}}><label>Message</label><br/><textarea required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} style={{width:'100%',padding:8}}/></div>
          <div><button className="btn" type="submit">Send Message</button></div>
          <p style={{marginTop:8}}>{msg}</p>
        </form>
      </div>
    </div>
  );
}
