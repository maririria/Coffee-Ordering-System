'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { supabase } from '@/lib/supabase';

export default function SignUpPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState('');
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

    if (!/^[a-zA-Z0-9_]{4,15}$/.test(username)) {
      setUsernameError('Username must be 4–15 characters, letters/numbers/underscores only.');
      valid = false;
    } else {
      setUsernameError('');
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setEmailError('Invalid email format.');
      valid = false;
    } else if (email.length < 6 || email.length > 50) {
      setEmailError('Email must be 6–50 characters.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&]).{8,}$/.test(password)) {
      setPasswordError('Password must be 8+ chars with upper, lower, number, and symbol.');
      valid = false;
    } else {
      setPasswordError('');
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert('❌ Signup failed: ' + error.message);
      return;
    }

    const userId = data.user?.id;

    await supabase.from('profiles').insert({
      id: userId,
      username: username,
      email: email,
    });

    alert('✅ Signup successful!');
    router.push('/login');
  };

  return (
    <>
      <Head>
        <title>Sign Up  Kaif</title>
      </Head>

      <main className="flex items-center justify-center min-h-screen relative overflow-hidden font-[Raleway,sans-serif]">
        <video autoPlay muted loop className="fixed top-0 left-0 w-full h-full object-cover -z-10">
          <source src="/videos/v2.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

        <div className="relative z-10 p-8 w-full max-w-md text-white bg-[rgba(44,34,32,0.85)] rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center font-[Playfair_Display]">
            Create Account on <span className="text-[#d4a373] font-[Great_Vibes]">Kaif</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="block mb-1 text-sm">Username or Phone</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#3e2d2b] border border-[#5d0d0d] text-white focus:ring-2 focus:ring-[#7b3e2e]"
              />
              {usernameError && <p className="text-red-400 text-sm mt-1">{usernameError}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#3e2d2b] border border-[#5d0d0d] text-white focus:ring-2 focus:ring-[#7b3e2e]"
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
                className="w-full px-4 py-2 rounded-lg bg-[#3e2d2b] border border-[#5d0d0d] text-white focus:ring-2 focus:ring-[#7b3e2e]"
              />
              {passwordError && <p className="text-red-400 text-sm mt-1">{passwordError}</p>}
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-[#7b3e2e] to-[#5d0d0d] text-white py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform">
              Sign Up
            </button>
          </form>

          <p className="text-center mt-6 text-sm">
            Already have an account? <a href="/login" className="text-[#d4a373] hover:underline">Login</a>
          </p>
        </div>
      </main>
    </>
  );
}
