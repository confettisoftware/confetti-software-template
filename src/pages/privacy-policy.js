import Layout from '../components/Layout';

const PrivacyPolicy = () => {
    return (
        <Layout>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg mb-4">Last Updated: June 18, 2025</p>

            <p className="mb-4">
                At Confetti Software, we take your privacy seriously. Our apps, including Math Flash, SudokuPlus, and TicTacToe+, are designed to respect your data.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Data Collection</h2>
            <p className="mb-4">
                TicTacToe+ displays banner ads using Google AdMob. AdMob may collect:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Advertising Identifier (IDFA)</li>
                <li>Approximate location (via IP address)</li>
            </ul>
            <p className="mb-4">
                This data is used solely to serve and measure ads. Confetti Software does not collect, store, or share personal data from TicTacToe+.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Remove Ads</h2>
            <p className="mb-4">
                TicTacToe+ includes a one-time in-app purchase to remove ads. When ads are removed, no advertising data is collected.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Contact</h2>
            <p className="mb-4">
                If you have any questions about our Privacy Policy, please contact us at{' '}
                <a href="mailto:info@confettisoftware.com" className="text-blue-500 hover:underline">
                    info@confettisoftware.com
                </a>.
            </p>
        </Layout>
    );
};

export default PrivacyPolicy;
