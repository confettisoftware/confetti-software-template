import Layout from '../components/Layout';
import Link from 'next/link';

const Home = () => {
    return (
        <Layout>
            <h1 className="text-4xl font-bold mb-4">Welcome to Confetti Software 🚀</h1>
            <p className="text-lg">Empowering creators to build the next big thing!</p>
            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-2">Our Apps</h2>
                <ul className="list-disc ml-6">
                    <li>
                        <Link href="/mathflash" className="text-blue-500 hover:underline">
                            Math Flash
                        </Link>
                        - Learn math with interactive flashcards.
                    </li>
                </ul>
            </section>

            {/* Add Footer Links */}
            <footer className="mt-8 border-t pt-4">
                <p className="text-center">
                    <Link href="/privacy-policy" className="text-blue-500 hover:underline">
                        Privacy Policy
                    </Link>
                    {" | "}
                    <Link href="/support" className="text-blue-500 hover:underline">
                        Support
                    </Link>
                </p>
            </footer>
        </Layout>
    );
};

export default Home;
