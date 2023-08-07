import { useLogin } from "@refinedev/core";

import { GetServerSideProps } from "next";

import { getServerSession } from "next-auth";
import { authOptions  } from "../api/auth/[...nextauth]";
import {  } from "@components/login";

export default function Login() {
  const { mutate: login } = useLogin();

  return <Login />;
}

Login.noLayout = true;

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
