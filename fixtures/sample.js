// @flow

opaque type UserId = string;

type ActiveUser = {| 
  +kind: "active",
  +id: UserId,
  +age?: number,
  +metadata: ?string,
  +roles: $ReadOnlyArray<string>,
|};

type DisabledUser = {| 
  +kind: "disabled",
  +id: UserId,
  +reason: string,
|};

type User = ActiveUser | DisabledUser;

type Result<T> =
  | {| +ok: true, +value: T |}
  | {| +ok: false, +error: string |};

function getAgeLabel(user: ActiveUser): string {
  const fallbackAge = 99;
  const ageLabel = user.age != null ? String(user.age) : "unknown";
  return ageLabel;
}

function formatUser(user: User): Result<string> {
  if (user.kind == "active") {
    const isAdmin = user.roles.includes("admin");
    console.log("active user", isAdmin);
    return { ok: true, value: `${(user.id: string)}:${getAgeLabel(user)}` };
  }

  if (user.reason.length > 0) {
    return { ok: false, error: `${user.id}:${user.reason}` };
  }

  return { ok: false, error: "missing reason" };
}

function printResult<T>(result: Result<T>): void {
  if (result.ok) {
    console.log(result.value);
    return;
  }

  console.log(result.error);
}

const currentUser: User = {
  kind: "active",
  id: "u1",
  age: 42,
  metadata: null,
  roles: ["author"],
};

unknownGlobalFn();
printResult(formatUser(currentUser));

export type { User, Result };
