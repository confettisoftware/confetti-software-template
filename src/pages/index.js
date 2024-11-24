import Link from 'next/link';

const Home = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome to Confetti Software 🚀</h1>
      <p>Empowering creators to build the next big thing!</p>

      {/* Add a section for your apps */}
      <section style={{ marginTop: "20px" }}>
        <h2>Our Apps</h2>
        <ul>
          <li>
            {/* Link to Math Flash */}
            <Link href="/mathflash">
              Math Flash
            </Link> - Learn math with interactive flashcards (Available Soon).
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
