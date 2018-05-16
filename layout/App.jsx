import Link from "next/link"

export default ({ children }) => {
  return (
    <div>
      <Link href={"/"}><a>Home</a></Link>&nbsp;
      {children}
      <style>{`
      /* Sample inline styles */
      a, a:visited, a:active {
        color: inherit
      }
      a:hover {
        color: #8B008B
      }
    `}
    </style>
    </div>
  )
}
