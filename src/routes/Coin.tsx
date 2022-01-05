import { useParams } from "react-router";

function Coin() {
  const { coinId } = useParams<{ coinId: string }>();
  console.log(coinId);
  return <h1>Coin</h1>;
}

export default Coin;
