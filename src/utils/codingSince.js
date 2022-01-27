export const codingSince = () => {
  const startingDate = new Date('March 29, 2021');
  const todaysDate = new Date(Date.now());
  const diffDate = startingDate.getTime() - todaysDate.getTime();
  const daysAgo = diffDate / (1000 * 3600 * 24);

  return Math.floor(Math.abs(daysAgo));
};
