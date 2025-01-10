import { useState, useCallback } from 'react';
import type { ModuleState, ModuleError } from '@/types/module';

export const useModule = (moduleName: string) => {
  const [state, setState] = useState<ModuleState>({
    data: null,
    status: 'idle'
  });

  const handleError = useCallback((error: ModuleError) => {
    setState(prev => ({
      ...prev,
      status: 'error',
      error
    }));
  }, []);

  const setData = useCallback((data: unknown) => {
    setState(prev => ({
      ...prev,
      data,
      status: 'success',
      error: undefined
    }));
  }, []);

  const setLoading = useCallback(() => {
    setState(prev => ({
      ...prev,
      status: 'loading'
    }));
  }, []);

  return {
    state,
    setData,
    setLoading,
    handleError
  };
};