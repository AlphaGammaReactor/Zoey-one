import React from 'react';

interface SplitPaneProps {
  leftPane: React.ReactNode;
  rightPane: React.ReactNode;
}

export const SplitPane: React.FC<SplitPaneProps> = ({ leftPane, rightPane }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/3 min-w-[320px] max-w-[480px] border-r border-gray-200 bg-white overflow-y-auto">
        {leftPane}
      </div>
      <div className="flex-1 overflow-y-auto bg-gray-50">
        {rightPane}
      </div>
    </div>
  );
};