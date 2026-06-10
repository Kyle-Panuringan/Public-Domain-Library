function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">FAQ</a></li>
        </ul>
      </nav>

      <p>{new Date().getFullYear()} Public Domain Library</p>
    </footer>
  )
}

export default Footer