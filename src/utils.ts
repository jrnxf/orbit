export const omit = <Key extends string, T extends Record<Key, any>>(
  source: T,
  key: Key
): Omit<T, Key> => {
  const clone = { ...source };
  delete clone[key];

  return clone;
};
