import { JSX } from "react";
import { withLayout } from "@/layout/Layout";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory, TopPageModel } from "@/interfaces/toppage.interface";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "@/interfaces/product.interface";
import { firstLevelMenu } from "@/helpers/helpers";

const Course = ({ menu, page, products }: CourseProps): JSX.Element => {
  return <>{products && products.length}</>;
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(
      (process.env.NEXT_PUBLIC_DOMAIN as string) + "/api/top-page/find",
      { firstCategory: m.id }
    );

    paths = paths.concat(
      menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}`))
    );
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) return { notFound: true };

  const firstCategoryItem = firstLevelMenu.find(
    (m) => m.route === params?.type
  );

  if (!firstCategoryItem) return { notFound: true };

  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      (process.env.NEXT_PUBLIC_DOMAIN as string) + "/api/top-page/find",
      { firstCategory: firstCategoryItem.id }
    );

    if (!menu.length) {
      return {
        notFound: true,
      };
    }

    const { data: page } = await axios.get<TopPageModel>(
      (process.env.NEXT_PUBLIC_DOMAIN as string) +
        "/api/top-page/byAlias/" +
        params.alias
    );

    const { data: products } = await axios.post<ProductModel[]>(
      (process.env.NEXT_PUBLIC_DOMAIN as string) + "/api/product/find",
      { category: page.category, limit: 10 }
    );

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
