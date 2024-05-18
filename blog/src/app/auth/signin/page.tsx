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
    <article className="flex items-center p-4 mt-[30%] justify-center ">
      <section className="flex w-[50%] justify-center items-center flex-col gap-4">
        <Signin
          className="hover:bg-pink-500 border p-4 w-full rounded-lg hover:text-white transition-colors duration-150"
          providers={providers}
          callbackUrl={callbackUrl ?? "/"}
        />
      </section>
    </article>
  );
};

export default SignPage;
