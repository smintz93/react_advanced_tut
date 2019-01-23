// next.js takes care of import react in this case. 
import Link from 'next/link';
import UpdateItem from '../components/UpdateItem';
// can pass in props here because query is exposed to all pages

const Update = (props) => (
  <div>
    <UpdateItem id={props.query.id} />
  </div>
);

export default Update;