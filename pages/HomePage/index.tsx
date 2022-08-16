import { NextPage } from "next";
import { useRouter } from 'next/router';
import Link from 'next/link'

const HomePage: NextPage = () => {
  return <div style={{
    display: "flex",
    flexDirection: "column",
  }}>
    <Link href="/pagina">
      <a>Entrar pagina</a>
    </Link>
    <Link href={`/produtos/${1111025155}`}>
      <a>Entrar Slug</a>
    </Link>
  </div>
}

export default HomePage