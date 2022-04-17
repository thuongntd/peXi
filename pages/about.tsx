import { Header } from '@/components/common';
import { EmptyLayout, MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models';
import { NextPage } from 'next';
import * as React from 'react';

interface IAboutProps {}

const About: NextPageWithLayout = (props: IAboutProps) => {
  return (
    <div>
      <Header />
      <div>About ne</div>
    </div>
  );
};

export default About;
