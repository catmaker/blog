import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";
import Signin from "@/components/Signin";

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

const SignPage = async ({ searchParams: { callbackUrl } }: Props) => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  const providers = (await getProviders()) ?? {};

  return (
    <article className="flex items-center p-4 mt-[30%] justify-center border rounded-lg shadow-sm hover:bg-pink-500 transition duration-150 cursor-pointer hover:text-white">
      <section className="flex w-[50%] justify-center items-center">
        <Signin providers={providers} callbackUrl={callbackUrl ?? "/"} />
      </section>
    </article>
  );
};

export default SignPage;
