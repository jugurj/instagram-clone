import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Head from "next/head";
import Header from "../../components/Header";

function SignIn({ providers }) {
  return (
    <>
      <Head>
        <title>Instagram clone | auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex flex-col items-center justify-center py-2 min-h-screen px-14 text-center">
        <img
          className="w-80"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
          alt="Instagram logo"
        />
        <p className="font-xs italic">
          This is nore a real app, it is build for educational purposes only
        </p>

        <div className="mt-12">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => SignIntoProvider(provider.id)}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default SignIn;
