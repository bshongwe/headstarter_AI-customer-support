import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'AI Customer Support',
  description: 'Headstarter Project 3 | Ernest, Chris | Igokalp | Sammy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
