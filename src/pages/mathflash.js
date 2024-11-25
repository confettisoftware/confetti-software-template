import Layout from '../components/Layout';

const MathFlash = () => {
    return (
        <Layout>
            <h1 className="text-4xl font-bold mb-4">Math Flash</h1>
            <p className="text-lg mb-6">Master math with fun and interactive flashcards!</p>
            <section>
                <h2 className="text-2xl font-semibold mb-2">Features</h2>
                <ul className="list-disc ml-6">
                    <li>Practice multiplication, division, addition, and subtraction.</li>
                    <li>Customizable question sets for focused learning.</li>
                    <li>Instant feedback to track your progress.</li>
                </ul>
            </section>
            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-2">Download</h2>
                <p>Coming soon to the App Store!</p>
            </section>
        </Layout>
    );
};

export default MathFlash;
