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
                        <Link href="/mathflash">
                            <a className="text-blue-500 hover:underline">
                                Math Flash
                            </a>
                        </Link>
                        - Learn math with interactive flashcards.
                    </li>
                </ul>
            </section>
            
            {/* Add Footer Links */}
            <footer className="mt-8 border-t pt-4">
                <p className="text-center">
                    <Link href="/privacy-policy">
                        <a className="text-blue-500 hover:underline">
                            Privacy Policy
                        </a>
                    </Link>
                    {" | "}
                    <Link href="/support">
                        <a className="text-blue-500 hover:underline">
                            Support
                        </a>
                    </Link>
                </p>
            </footer>
        </Layout>
    );
};

export default Home;

