const palette = [
  '#152d32',
  '#001f24',
  '#2a3717',
  '#052d0a',
  '#0f4539',
];

export default function colorFromString(string) {
  const number = string.split('').map(c => c.charCodeAt(0)).reduce((a, b) => a + b);
  return palette[number % palette.length];
}