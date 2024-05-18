"use client";
import { ClientSafeProvider, signIn } from "next-auth/react";
import BasicButton from "@/components/ui/button/BasicButton";

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
  className?: string;
};

const Signin = ({ providers, callbackUrl, className }: Props) => {
  console.log(providers); // providers 객체의 내용을 콘솔에 출력

  return (
    <>
      {Object.values(providers).map((provider) => (
        <BasicButton
          className={className}
          key={provider.id}
          text={`Sign in with ${provider.name}`}
          onClick={() => signIn(provider.id, { callbackUrl })}
        />
      ))}
    </>
  );
};
export default Signin;
