import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <h1 className="text-4xl font-bold mb-4">About Confetti Software</h1>
    <p className="text-lg mb-4">
      Confetti Software is owned and operated by Joel Boyd, doing business as (DBA) Confetti Software.
    </p>
    <p className="text-lg mb-4">
      We create educational and entertaining apps designed to support healthy habits, curiosity, and learning for all ages. Some of our current apps include <strong>Math Flash</strong> and <strong>SudokuPlus</strong>.
    </p>
    <p className="text-lg">
      For questions, support, or feedback, you can contact us anytime at{' '}
      <a href="mailto:info@confettisoftware.com" className="text-blue-500 hover:underline">
        info@confettisoftware.com
      </a>.
    </p>
  </Layout>
);

export default About;
