import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="interior-page">
      <header className="frame page-intro">
        <p className="section-note">Wrong turn</p>
        <h1>Empty chair.</h1>
        <Link href="/" className="page-intro-lede">
          Back to the shop
        </Link>
      </header>
    </main>
  );
}
