export interface Theme {
  name: string;
  colors: {
    background: string;
    'sub-alt': string;
    main: string;
    sub: string;
    caret: string;
    text: string;
    error: string;
    'extra-error': string;
  };
}

export const themes: Theme[] = [
  {
    name: 'Serika Dark',
    colors: {
      background: '#323437',
      'sub-alt': '#2c2e31',
      main: '#e2b714',
      sub: '#646669',
      caret: '#e2b714',
      text: '#d1d0c5',
      error: '#ca4754',
      'extra-error': '#7e2a33',
    },
  },
  {
    name: 'Dracula',
    colors: {
      background: '#282a36',
      'sub-alt': '#21222c',
      main: '#f8f8f2',
      sub: '#6272a4',
      caret: '#f8f8f2',
      text: '#bd93f9',
      error: '#ff5555',
      'extra-error': '#ffb86c',
    },
  },
  {
    name: 'Olivia',
    colors: {
      background: '#1c1b1d',
      'sub-alt': '#111111',
      main: '#deaf9d',
      sub: '#746f67',
      caret: '#deaf9d',
      text: '#f2f2f2',
      error: '#c53942',
      'extra-error': '#7e292e',
    },
  },
  {
    name: 'Cyber Neon',
    colors: {
      background: '#0d0d0d',
      'sub-alt': '#1a1a1a',
      main: '#00ffe0',
      sub: '#ff00ff',
      caret: '#00ffe0',
      text: '#e0e0e0',
      error: '#ff0040',
      'extra-error': '#800020',
    },
  },
  {
    name: 'Paper Light',
    colors: {
      background: '#ffffff',
      'sub-alt': '#f5f5f5',
      main: '#333333',
      sub: '#888888',
      caret: '#333333',
      text: '#111111',
      error: '#e63946',
      'extra-error': '#a4161a',
    },
  },
  {
    name: 'Ocean Breeze',
    colors: {
      background: '#001f3f',
      'sub-alt': '#003366',
      main: '#00aaff',
      sub: '#66c2ff',
      caret: '#00aaff',
      text: '#e0f7ff',
      error: '#ff4d6d',
      'extra-error': '#991f36',
    },
  },
  {
    name: 'Forest Dawn',
    colors: {
      background: '#1b2e1d',
      'sub-alt': '#243b26',
      main: '#7bd389',
      sub: '#4a6741',
      caret: '#7bd389',
      text: '#d8e8d1',
      error: '#d62828',
      'extra-error': '#841c1c',
    },
  },
  {
    name: 'Matrix',
    colors: {
      background: '#000000',
      'sub-alt': '#0d0d0d',
      main: '#00ff41',
      sub: '#008f11',
      caret: '#00ff41',
      text: '#00ff41',
      error: '#ff0033',
      'extra-error': '#800000',
    },
  },
  {
    name: 'Pastel Dream',
    colors: {
      background: '#f9f9f9',
      'sub-alt': '#f0e6ef',
      main: '#ffb5e8',
      sub: '#b28dff',
      caret: '#ffb5e8',
      text: '#444444',
      error: '#ff6f61',
      'extra-error': '#c44536',
    },
  },
  {
    name: 'Sunset Glow',
    colors: {
      background: '#2b1d2f',
      'sub-alt': '#3b2a3d',
      main: '#ff9a76',
      sub: '#f6d365',
      caret: '#ff9a76',
      text: '#fcefee',
      error: '#ff4e50',
      'extra-error': '#7f1d1d',
    },
  },
  {
    name: 'Arctic Ice',
    colors: {
      background: '#e6f2ff',
      'sub-alt': '#cce0ff',
      main: '#004080',
      sub: '#3366cc',
      caret: '#004080',
      text: '#001f33',
      error: '#cc0000',
      'extra-error': '#800000',
    },
  },
  {
    name: 'Mono Gray',
    colors: {
      background: '#121212',
      'sub-alt': '#1e1e1e',
      main: '#aaaaaa',
      sub: '#555555',
      caret: '#aaaaaa',
      text: '#e0e0e0',
      error: '#ff4d4d',
      'extra-error': '#800000',
    },
  },
  {
    name: 'Sakura Bloom',
    colors: {
      background: '#fff0f6',
      'sub-alt': '#ffe6f0',
      main: '#ff80ab',
      sub: '#f06292',
      caret: '#ff80ab',
      text: '#4a4a4a',
      error: '#e53935',
      'extra-error': '#9a1f1f',
    },
  },
  {
    name: 'Cosmic Night',
    colors: {
      background: '#0d0b1a',
      'sub-alt': '#1c1a29',
      main: '#9d4edd',
      sub: '#5a189a',
      caret: '#9d4edd',
      text: '#e0c3fc',
      error: '#ff0054',
      'extra-error': '#800030',
    },
  },
  {
    name: 'Inferno',
    colors: {
      background: '#1a0000',
      'sub-alt': '#330000',
      main: '#ff1a1a',
      sub: '#ff751a',
      caret: '#ff1a1a',
      text: '#ffcccc',
      error: '#ff3333',
      'extra-error': '#990000',
    },
  },
];
