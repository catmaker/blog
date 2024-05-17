"use client";
import { ClientSafeProvider, signIn } from "next-auth/react";
import BasicButton from "@/components/ui/button/BasicButton";

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

const Signin = ({ providers, callbackUrl }: Props) => {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <BasicButton
          key={id}
          text={`Sign in with ${name}`}
          onClick={() => signIn(id, { callbackUrl })}
        />
      ))}
    </>
  );
};

export default Signin;
