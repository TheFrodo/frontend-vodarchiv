import { LoginForm } from "../components/Authentication/Login";
import { Container } from "@mantine/core";
import { RegisterForm } from "../components/Authentication/Register";
import { useDocumentTitle } from "@mantine/hooks";

const RegisterPage = () => {
  useDocumentTitle("VodArchiv.net - Registrierung");
  return (
    <div>
      <Container mt={50} size="xs">
        <RegisterForm />
      </Container>
    </div>
  );
};

export default RegisterPage;
