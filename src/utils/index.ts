export const isObjectEmpty = (obj: object) => Object.keys(obj).length === 0;
export const isAuth = (data: object) =>
  localStorage.ghtoken && !isObjectEmpty(data);
