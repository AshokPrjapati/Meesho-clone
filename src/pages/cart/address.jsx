import CartNav from "@/components/cart/CartNav";
import Head from "next/head";
import React from "react";

const Address = () => {
  return (
    <>
      <Head>
        <title>ApniDukan-Address</title>
        <meta name="description" content="Apni dukan Address page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <CartNav image={"../../../images/s2.png"} />
      </div>
    </>
  );
};

export default Address;
