import Layout from '../components/Layout';

const Support = () => {
    return (
        <Layout>
            <h1 className="text-4xl font-bold mb-4">Support</h1>
            <p className="text-lg">
                If you need help with any of our apps, please reach out to us at{' '}
                <a href="mailto:info@confettisoftware.com" className="text-blue-500 hover:underline">
                    confettisoftware@google.com
                </a>.
            </p>
            <p className="mt-4">We aim to respond to all inquiries within 48 hours.</p>
        </Layout>
    );
};

export default Support;
