import Layout from '../components/Layout';
import Link from 'next/link';

const Home = () => {
    return (
        <Layout>
            <h1 className="text-4xl font-bold mb-4">Welcome to Confetti Software 🚀</h1>
            <p className="text-lg mb-6">Tiny apps, big surprises.</p>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-2">Our Apps</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>
                        <Link href="/mathflash" className="text-blue-500 hover:underline">
                            Math Flash
                        </Link>
                        {' – '}Learn math with interactive flashcards.
                    </li>
                    <li>
                        <Link href="/sudokuplus" className="text-blue-500 hover:underline">
                            SudokuPlus
                        </Link>
                        {' – '}Challenge your brain with clean, minimal Sudoku.
                    </li>
                    <li>
                        <Link href="/tictactoe" className="text-blue-500 hover:underline">
                            TicTacToe+
                        </Link>
                        {' – '}A sleek, smart take on the classic game with an ad-free option.
                    </li>
                </ul>
            </section>
        </Layout>
    );
};

export default Home;
