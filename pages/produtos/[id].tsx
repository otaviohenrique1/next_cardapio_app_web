import { NextPage } from "next"
import { useRouter } from 'next/router';

const Produto: NextPage = () => {
  const router = useRouter();
  return <div>
    <h1>{router.query.id}</h1>
    <button>voltar</button>
  </div>
}

export default Produto