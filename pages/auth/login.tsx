import React from "react";
import {
  Box,
  Button,
  Checkbox,
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

const LoginPage = () => {
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
      <Flex bg="white" w="100%" h="744px" p="0px">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.setSubmitting(false);
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
              }}
            >
              <Text as="h2" variant="login">
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
                />
              </FormControl>
              <FormControl>
                <FormLabel variant="login">Password</FormLabel>
                <Field
                  as={Input}
                  variant="login"
                  type="password"
                  name="password"
                  placeholder="Your password"
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
              <Button
                variant="login"
                isLoading={props.isSubmitting}
                type="submit"
              >
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
                <Text variant="label" fontWeight="600">
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
