import { JSX } from "react";
import { Button, Htag, Paragraph } from "@/components";

export default function Home(): JSX.Element {
  return (
    <div>
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
    </div>
  );
}
