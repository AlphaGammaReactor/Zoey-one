import '@testing-library/jest-dom'
import { TextDecoder, TextEncoder } from 'util'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

// Mock WebSocket
global.WebSocket = class {
  constructor(url) {
    this.url = url;
    this.readyState = 1;
  }
  send() {}
  close() {}
}

// Mock window.fs for file system operations
global.window.fs = {
  readFile: jest.fn(),
  writeFile: jest.fn(),
}