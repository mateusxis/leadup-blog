export const includesNew = (news, newCurrent) => {
  return news.some((newObj) => newObj.id === newCurrent.id);
};
