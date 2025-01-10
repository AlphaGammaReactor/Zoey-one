import type { NextPage } from 'next';
import { SplitPane } from '@/components/layout/SplitPane';
import { ChatInterface } from '@/components/chat/ChatInterface';

const Home: NextPage = () => {
  return (
    <SplitPane
      leftPane={<ChatInterface />}
      rightPane={
        <div className="p-8">
          <h1 className="text-4xl font-primary text-text-primary">
            Welcome to Zoey-One
          </h1>
          <p className="mt-4 text-text-secondary">
            AI-powered production organization tool for the film industry
          </p>
        </div>
      }
    />
  );
};

export default Home;