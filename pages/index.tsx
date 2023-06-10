import { JSX, useState } from "react";
import { Button, Htag, Paragraph, Rating, Tag } from "@/components";
import { withLayout } from "@/layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(2);

  return (
    <>
      <Htag tag="h1">12</Htag>
      <Button appearance="primary" arrow="right">
        TEXT
      </Button>
      <Button appearance="ghost" arrow="down">
        TEXT
      </Button>
      <Paragraph>defult</Paragraph>
      <Paragraph size="s">s</Paragraph>
      <Paragraph size="m">m</Paragraph>
      <Paragraph size="l">l</Paragraph>
      <Tag size="s" color="ghost" href="#">
        s
      </Tag>
      <Tag size="m" color="red" href="#">
        m
      </Tag>
      <Tag size="s" color="green">
        s
      </Tag>
      <Tag size="m" color="grey">
        m
      </Tag>
      <Tag size="s" color="primary">
        s
      </Tag>
      <Tag size="s">m</Tag>
      <Rating isEditable={true} rating={rating} setRating={setRating}></Rating>
      <ul>
        {menu.map((menuItem) => (
          <li key={menuItem._id.secondCategory}>
            {menuItem._id.secondCategory}
          </li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(
    (process.env.NEXT_PUBLIC_DOMAIN as string) + "/api/top-page/find",
    { firstCategory }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

export interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
