import Layout from '../components/Layout';

const PrivacyPolicy = () => {
    return (
        <Layout>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg mb-4">Last Updated: November 24, 2024</p>
            <p>
                At Confetti Software, we take your privacy seriously. The Math Flash app does not collect, store, or share any personal data.
                All user data is stored locally on your device and is never transmitted to our servers.
            </p>
            <p className="mt-4">
                If you have any questions about our Privacy Policy, please contact us at{' '}
                <a href="mailto:confettisoftware@google.com" className="text-blue-500 hover:underline">
                    confettisoftware@google.com
                </a>.
            </p>
        </Layout>
    );
};

export default PrivacyPolicy;
