import Link from "next/link"

import Header from '../components/Header'

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
