export const selectedUser = (user) => {
  console.log('you clicked', user.name);
  return {
    type: "USER_CLICKED",
    payload: user
  }
};
//we can give all types like USER_DELETED, LIST_SCROLLED
