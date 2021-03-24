export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function stringParser<T>(data: T): any {
  if(typeof data === "string") {
    return JSON.parse(data);
  }
  return data;
}
