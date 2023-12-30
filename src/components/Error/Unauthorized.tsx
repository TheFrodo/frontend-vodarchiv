import {
  Title,
  Text,
  Button,
  Container,
  Group,
} from "@mantine/core";
import Link from "next/link";

import classes from "./Unauthorized.module.css"

export function Unauthorized() {

  return (
    <Container className={classes.root}>
      <div className={classes.label}>401</div>
      <Title className={classes.title}>Unauthorized.</Title>
      <Text
        size="lg"
        className={classes.description}
      >
        Entweder bist du nicht eingeloggt oder du hast keine Berechtigung diese
        Seite aufzurufen.
      </Text>
      <Group>
        <Link href="/">
          <Button variant="subtle" size="md">
            Bring mich zurück auf die Startseite.
          </Button>
        </Link>
      </Group>
    </Container>
  );
}
