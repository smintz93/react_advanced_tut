// next.js takes care of import react in this case. 
import Link from 'next/link';

const Sell = (props) => (
  <div>
    <p>Sell!</p>
    <Link href="/index">
      <a>Home</a> 
    </Link>
  </div>
);

export default Sell;