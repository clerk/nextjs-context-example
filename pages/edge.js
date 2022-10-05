import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getContext } from "../context";

export const getServerSideProps = ({ req }) => {
  return { props: { foo: getContext(req, "foo") } };
};

export default function Page(props) {
  return JSON.stringify(props);
}

export const config = {
  runtime: "experimental-edge",
};
