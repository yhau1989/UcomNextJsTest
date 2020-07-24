import Head from "next/head";

const Container = (props) => {
  return (
    <div className="h-screen">
      <Head>
        <title>Ucom Test</title>
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
      </Head>
      <div>{props.children}</div>
    </div>
  );
};

export default Container;
