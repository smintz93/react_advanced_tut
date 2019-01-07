// next.js takes care of import react in this case. 
import Link from 'next/link';
const Home = (props) => (
  <div>
    <p>Hey! Home!</p>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
  </div>
);

export default Home