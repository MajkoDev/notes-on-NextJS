export default function BloyLayout({ children }) {
  return (
    <section>
      <nav className="my-4 flex justify-center">
        <div className="container flex flex-row justify-between">
          <p className="font-semibold">Themes</p>
          <div className="flex flex-row gap-4">
            <a href="/">Sport</a>
            <a href="/">Politics</a>
            <a href="/">Culture</a>
          </div>
        </div>
      </nav>
      {children}
    </section>
  );
}
