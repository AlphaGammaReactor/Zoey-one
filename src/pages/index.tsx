import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-primary text-text-primary">
          Welcome to Zoey-One
        </h1>
        <p className="mt-4 text-text-secondary">
          AI-powered production organization tool for the film industry
        </p>
      </main>
    </div>
  );
};

export default Home;