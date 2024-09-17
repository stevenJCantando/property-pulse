import '/assets/styles/globals.css';
import Navbar from '/components/Navbar';

export const metadata = {
    title: 'Property Pulse | Find The Perfect Rental',
    description: 'Find Your Dream Rental Property',
    keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <Navbar />
            <main>
                {children}
            </main>
        </body>
    </html> 
  );
};

export default MainLayout