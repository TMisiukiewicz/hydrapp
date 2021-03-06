const flattenObject = (
  obj: MappedObject<any>,
  parent: null | string = null,
  res: { [key: string]: string } = {}
): { [key: string]: string } => {
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(obj)) {
    const propName = parent ? `${parent}.${key}` : key;

    if (typeof value === 'object') {
      flattenObject(value, propName, res);
    } else {
      res[propName] = value;
    }
  }

  return res;
};

export default flattenObject;
