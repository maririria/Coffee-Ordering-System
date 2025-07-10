'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    document.body.classList.add('bg-video');
    return () => {
      document.body.classList.remove('bg-video');
    };
  }, []);

  const validateFields = () => {
    let valid = true;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setEmailError('Invalid email format.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      valid = false;
    } else {
      setPasswordError('');
    }

    return valid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateFields()) return;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert('❌ Login failed: ' + error.message);
      return;
    }

    alert('✅ Login successful!');
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Login – Kaif</title>
      </Head>

      <main className="flex items-center justify-center min-h-screen relative overflow-hidden font-[Raleway,sans-serif]">
        <video autoPlay muted loop className="fixed top-0 left-0 w-full h-full object-cover -z-10">
          <source src="/videos/v2.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

        <div className="relative z-10 p-8 w-full max-w-md text-white bg-[rgba(44,34,32,0.85)] rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center font-[Playfair_Display]">
            Welcome Back to <span className="text-[#d4a373] font-[Great_Vibes]">Kaif</span>
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="email" className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#3e2d2b] border border-[#5d0d0d] text-white"
              />
              {emailError && <p className="text-red-400 text-sm mt-1">{emailError}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-sm">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#3e2d2b] border border-[#5d0d0d] text-white"
              />
              {passwordError && <p className="text-red-400 text-sm mt-1">{passwordError}</p>}
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-[#7b3e2e] to-[#5d0d0d] text-white py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform">
              Login
            </button>
          </form>

          <p className="text-center mt-6 text-sm">
            Don't have an account? <a href="/signup" className="text-[#d4a373] hover:underline">Sign Up</a>
          </p>
        </div>
      </main>
    </>
  );
}
