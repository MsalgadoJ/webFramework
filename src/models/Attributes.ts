export class Attributes<T> {
  constructor(private data: T) {}

  // limits the values that key can be. For this project:
  // name, age, id
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}
