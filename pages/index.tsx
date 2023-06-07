import { JSX } from "react";
import { Button, Htag } from "@/components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">12</Htag>
      <Button appearance="primary" arrow="right">
        TEXT
      </Button>
      <Button appearance="ghost" arrow="right">
        TEXT
      </Button>
    </div>
  );
}
