declare global {
  type MappedObject<T, K = string> = Record<K, T>;
}

export {};
