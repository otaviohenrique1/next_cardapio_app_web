import { NextPage } from "next";
import { useRouter } from 'next/router';
import Link from 'next/link'

const Pagina: NextPage = () => {
  return <div>
    <Link href="/">
      <a>Voltar</a>
    </Link>
  </div>
}

export default Pagina