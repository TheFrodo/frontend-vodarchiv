import { LoginForm } from "../components/Authentication/Login";
import { Container } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";

const LoginPage = () => {
  useDocumentTitle("VODArchiv - Login");
  return (
    <div>
      <Container mt={50} size="sm">
        <LoginForm />
      </Container>
    </div>
  );
};

export default LoginPage;
