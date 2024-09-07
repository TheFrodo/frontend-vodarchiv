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
      <Title className={classes.title}>Nicht Berechtigt.</Title>
      <Text
        size="lg"
        className={classes.description}
      >
        Entweder bist du nicht eingeloggt oder du hast keine Berechtigung, diese Seite anzusehen.
      </Text>
      <Group>
        <Link href="/">
          <Button variant="subtle" size="md">
            Zurück zur Startseite
          </Button>
        </Link>
      </Group>
    </Container>
  );
}
