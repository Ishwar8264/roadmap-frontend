export type User = {
  id: string;
  name: string;
};

export function getUserName(user: User) {
  return user.name;
}
