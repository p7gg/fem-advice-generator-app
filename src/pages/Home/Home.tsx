import { useEffect, useState } from "react";
import { Container, Main, Header, Content } from "./Home.styles";

import { Divider, ActionButton } from "../../components";

import { Advice } from "../../types";

import { API_URL } from "../../constants";

export const Home = () => {
  const [data, setData] = useState<Advice>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAdvice = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(API_URL);
      const data: Advice = await response.json();

      setData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <Container>
      <Main>
        <Header>
          <h1>Advice #{data?.slip.id}</h1>
        </Header>

        <Content>
          <p>{!isLoading ? `"${data?.slip.advice}"` : "loading..."}</p>
        </Content>

        <Divider />

        <ActionButton onClick={getAdvice} />
      </Main>
    </Container>
  );
};
