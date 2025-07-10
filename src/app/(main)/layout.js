// app/layout.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsTicker from '@/components/NewsTicker';
import '../globals.css';

export const metadata = {
  title: 'Kaif Café',
  description: 'A heavenly place for coffee lovers!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NewsTicker />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
