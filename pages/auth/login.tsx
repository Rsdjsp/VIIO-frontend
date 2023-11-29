import React, { useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Checkbox,
  Collapse,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import NavWrapper from "@/components/NavWrapper";
import { FaChevronLeft } from "react-icons/fa6";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { post } from "@/axios";
import { AxiosError } from "axios";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [reqError, setReqError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const loginFun = async (email: string, password: string) => {
    try {
      const response = await signIn("credentials", {
        email: email,
        password: password,
        logged: isLogin ? "yes" : "no",
        redirect: false,
      });

      if (response?.error) {
        setLoading(false);
        return setReqError(response.error as string);
      }
      if (response?.ok) return router.push("/");
    } catch (error) {
      setReqError(error as string);
      setLoading(false);
    }
  };

  return (
    <>
      <NavWrapper parameters={{ padding: "16px" }}>
        <Flex position="relative" flexDir="row" w="100%">
          <Icon
            as={FaChevronLeft}
            w="16px"
            h="16px"
            flexShrink={0}
            position="absolute"
            my="auto"
            color="black"
            top="3px"
          />
          <Text variant="nav" m="auto">
            Log In
          </Text>
        </Flex>
      </NavWrapper>
      <Flex bg="white" w="100%" h="744px" justifyContent="center" p="0px">
        <Formik
          initialValues={{ email: "", password: "", name: "" }}
          onSubmit={async (values) => {
            setLoading(true);
            if (isLogin) {
              const user = {
                name: values.name,
                email: values.email,
                password: values.password,
              };
              try {
                const response = await post("/api/auth/signup", user);
                if (response.data) {
                  return loginFun(
                    response.data[0].email,
                    response.data[0].password
                  );
                }
              } catch (error) {
                if (error instanceof AxiosError) {
                  setReqError(error.response?.data.message);
                  setLoading(false);
                }
              }
            }
            return loginFun(values.email, values.password);
          }}
        >
          {(props) => (
            <Form
              style={{
                padding: "0px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                gap: "24px",
                border: "2px outset black",
                borderRadius: "8px",
                marginBottom: "24px",
              }}
            >
              <Text as="h2" variant="login" mt="-50px">
                MAYNOOTH
              </Text>
              <FormControl>
                <FormLabel variant="login" color="black">
                  Email
                </FormLabel>
                <Field
                  as={Input}
                  variant="login"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  isRequired
                />
              </FormControl>
              <Collapse in={isLogin}>
                <FormControl>
                  <FormLabel variant="login" color="black">
                    Name
                  </FormLabel>
                  <Field
                    as={Input}
                    variant="login"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    isRequired={isLogin ? true : false}
                  />
                </FormControl>
              </Collapse>
              <FormControl>
                <FormLabel variant="login">Password</FormLabel>
                <Field
                  as={Input}
                  variant="login"
                  type="password"
                  name="password"
                  placeholder="Your password"
                  isRequired
                />
              </FormControl>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                alignSelf="stretch"
              >
                <Box display="flex" alignItems="center" gap="8px">
                  <Checkbox
                    colorScheme="black"
                    w="24px"
                    h="24px"
                    borderRadius="4px"
                  />

                  <Text variant="label">Remember me</Text>
                </Box>
                <Text variant="label">Forgot password?</Text>
              </Flex>
              {reqError !== "" && (
                <Alert status="error" color="red">
                  <AlertIcon />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{reqError}</AlertDescription>
                </Alert>
              )}
              <Button variant="login" isLoading={loading} type="submit">
                Login
              </Button>
              <Text variant="or">or</Text>
              <Button type="button" variant="provider">
                Continue with Google
              </Button>
              <Button type="button" variant="provider">
                Continue with Facebook
              </Button>
              <Flex>
                <Text variant="label">Don&apos;t have an account?</Text>
                <Text
                  variant="label"
                  fontWeight="600"
                  onClick={() => setIsLogin(!isLogin)}
                  cursor="pointer"
                >
                  Sign up
                </Text>
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
    </>
  );
};

export default LoginPage;
