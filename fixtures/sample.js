// @flow

type User = {
  id: string,
  age?: number,
};

function formatUser(user: User): string {
  const ageLabel = user.age != null ? String(user.age) : "unknown";
  return `${user.id}:${ageLabel}`;
}

const currentUser: User = { id: "u1", age: 42 };
formatUser(currentUser);
