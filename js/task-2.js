const getUsersWithFriend = (users, friendName) =>
  users.filter(user => user.friends.includes(friendName));

console.log(getUsersWithFriend(allUsers, "Briana Decker"));
console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
console.log(getUsersWithFriend(allUsers, "Aisha Tran"));