// Simple hashing function to convert the firestore document ID to a 5 digit integer
const convertID = (stringID) => {
  let hash = 0;
  if (stringID.length === 0) return hash;

  for (let i = 0; i < stringID.length; i++) {
    const char = stringID.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash;
  }

  hash = Math.abs(hash);
  hash %= 100000;

  return hash;
};

export { convertID };
