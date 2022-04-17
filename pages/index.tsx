// import Header from '@/components/common/header';
import Card from "@/components/Card";
import { Header } from "@/components/common";
import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "@/models";
import type { NextPage } from "next";
import React from "react";

const Home: NextPageWithLayout = () => {
  return <div>This is content home page with main layout</div>;
};

Home.Layout = MainLayout;

export default Home;
