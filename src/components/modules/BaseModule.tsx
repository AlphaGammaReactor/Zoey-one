import React from 'react';
import type { ModuleProps, ModuleState } from '@/types/module';

export const BaseModule: React.FC<ModuleProps> = ({ isActive, onStateChange, aiContext }) => {
  React.useEffect(() => {
    if (isActive) {
      const initialState: ModuleState = {
        data: null,
        status: 'idle'
      };
      onStateChange(initialState);
    }
  }, [isActive, onStateChange]);

  if (!isActive) return null;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-primary text-text-primary">Base Module</h2>
      <p className="mt-2 text-text-secondary">
        This is a base module component. Extend this for specific functionality.
      </p>
    </div>
  );
};