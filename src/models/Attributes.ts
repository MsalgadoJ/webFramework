export class Attributes<T> {
  constructor(private data: T) {}

  // limits the values that key can be. For this project:
  // name, age, id
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  // We turn get into a "bound" function (arrow function) in order to
  // correctly bound "this" to the instance of the function

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
