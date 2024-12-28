const words = ['html', '', 'react', 'javascript','python','php'];

export const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};
