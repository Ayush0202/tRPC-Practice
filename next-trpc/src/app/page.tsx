import { AppRouter } from "@/server/routers/_app";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

export default async function Home() {
  const hello = await trpc.hello.query({ text: "hello" });
  console.log(hello);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
