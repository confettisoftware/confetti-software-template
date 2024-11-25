import Layout from '../components/Layout';

const Home = () => {
    return (
        <Layout>
            <h1 className="text-4xl font-bold mb-4">Welcome to Confetti Software 🚀</h1>
            <p className="text-lg">Empowering creators to build the next big thing!</p>
            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-2">Our Apps</h2>
                <ul className="list-disc ml-6">
                    <li>
                        <a href="/mathflash" className="text-blue-500 hover:underline">
                            Math Flash
                        </a> - Learn math with interactive flashcards.
                    </li>
                </ul>
            </section>
        </Layout>
    );
};

export default Home;
