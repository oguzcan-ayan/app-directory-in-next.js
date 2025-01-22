export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head />
      <body>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
