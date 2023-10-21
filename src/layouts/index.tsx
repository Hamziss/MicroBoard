export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>Header so much</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}
