import Fetch from 'isomorphic-unfetch';
import Prices from '../components/Prices';

const Index = (props) => {
  return (
    <div>
      <h1>Welcome to BitzPrice</h1>
      <p>Check current rates</p>
      <Prices bpi={props.bpi} />
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpi: data.bpi,
  };
};
export default Index;
