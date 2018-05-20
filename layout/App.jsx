import Link from "next/link"

import Header from '../components/Header'

export default ({ children }) => {
  return (
    <div>
      <Link href={"/"}><a>Home</a></Link>&nbsp;
      <Link href={"/ping"}><a>Ping</a></Link>&nbsp;
      <Link as={`/people`} href={`/ping`}><a>People</a></Link>&nbsp;
      {/* EXAMPLE CODE: This is how you translate client side URLs into NextJS pages with parameters
        <Link as={`/people/developers`} href={`/ping?slug=developers`}><a>Developers</a></Link>&nbsp;
        <Link as={`/people/developers/rob`} href={`/ping?slug=developers&name=rob`}><a>Rob</a></Link>&nbsp;      
      */}

      {children}
    </div>
  )
}
