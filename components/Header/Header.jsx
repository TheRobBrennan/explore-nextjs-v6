import PropTypes from "prop-types"

import Link from "next/link"

const links = [
  { href: "/", text: "Home" },
  { href: "/ping", text: "Ping" },
  { href: "/secret", text: "Top Secret", authRequired: true },
  { href: "/auth/sign-in", text: "Sign In", anonymousOnly: true },
  { href: "/auth/sign-off", text: "Sign Off", authRequired: true },
]

const getAllowedLinks = isAuthenticated =>
  links
    .filter(l => !l.authRequired || (l.authRequired && isAuthenticated))
    .filter(l => !isAuthenticated || /* istanbul ignore next */(isAuthenticated && !l.anonymousOnly))

const Header = ({ isAuthenticated, currentUrl }) => {
  return (
    <div id="header">
      {getAllowedLinks(isAuthenticated).map(l => {
        return (
          <span>
            <Link prefetch key={l.href} href={l.href}>
              {l.text}
            </Link>
            &nbsp;
          </span>
        )
      })}
      <style>
        {`
        /* Sample inline styles */
        a, a:visited, a:active {
          color: inherit;
        }
        a:hover {
          color: #8B008B
        }
      `}
      </style>
    </div>
  )
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  currentUrl: PropTypes.string,
}

export default Header
