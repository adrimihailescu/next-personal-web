import React from "react";
import { useRouter } from "next/navigation";
import Blob from "../blob/Blob";
import { Button, ContentWrapper, Subtitle, Title, Wrapper } from "./style";

const HomePage = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Blob className="blob" />
      <ContentWrapper>
        <Title>Adriana Mihailescu</Title>
        <Subtitle>Frontend Developer</Subtitle>
        <Button onClick={() => router.push("/about")}>See more</Button>
      </ContentWrapper>
    </Wrapper>
  );
};

export default HomePage;
