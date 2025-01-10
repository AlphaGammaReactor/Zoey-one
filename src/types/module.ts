export interface ModuleState {
  data: unknown;
  status: 'idle' | 'loading' | 'error' | 'success';
  error?: ModuleError;
}

export interface ModuleError {
  code: string;
  message: string;
  context: {
    module: string;
    action: string;
    params: unknown;
  };
  timestamp: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface ModuleProps {
  isActive: boolean;
  onStateChange: (state: ModuleState) => void;
  aiContext?: AIContext;
}

export interface AIContext {
  conversation: ConversationState;
  moduleContext: Record<string, unknown>;
  permissions: string[];
}

export interface ConversationState {
  messages: Message[];
  context: Record<string, unknown>;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
  metadata?: Record<string, unknown>;
}