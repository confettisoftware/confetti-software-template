import Layout from '../components/Layout';

const TicTacToePlus = () => {
    return (
        <Layout>
            <h1 className="text-4xl font-bold mb-4">TicTacToe+</h1>
            <p className="text-lg mb-6">
                A smarter way to play Tic-Tac-Toe — with beautiful gradients, evolving difficulty, and an ad-free option.
            </p>

            <section>
                <h2 className="text-2xl font-semibold mb-2">Features</h2>
                <ul className="list-disc ml-6">
                    <li>Modern design with animated gradients and clean UI</li>
                    <li>Play against a smart AI with adjustable difficulty</li>
                    <li>Track your wins and streaks with built-in stats</li>
                    <li>Includes banner ads by Google AdMob (removable)</li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-2">Remove Ads</h2>
                <p>
                    A one-time in-app purchase removes all ads for a cleaner, uninterrupted experience.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-2">Download</h2>
                <p>Now available on the App Store.</p>
            </section>
        </Layout>
    );
};

export default TicTacToePlus;
