import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../server";

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

async function main() {
  const createuser = await trpc.userCreate.mutate({
    name: "ayush",
  });

  console.log("users created", createuser.name);

  const user = await trpc.userById.query("20");
  if (!user) {
    console.log("user not present");
  } else {
    console.log("users", user);
  }

  const allUsers = await trpc.userList.query();
  console.log("all users", allUsers);
}

main();
