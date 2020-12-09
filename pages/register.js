import {
  Box,
  Flex,
  Img,
  Heading,
  FormControl,
  FormLabel,
  Button,
  Input,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { Formik, Form, Field, useFormik } from "formik";
import ButtonAmazon from "../components/Form/ButtonAmazon";
import { auth } from "../firebase";
import { useRouter } from "next/router";

const register = () => {
  const router = useRouter();

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Email is required";
    }
    return error;
  };
  const validatePassword = (value) => {
    let error;
    if (!value) {
      error = "Password is required";
    }
    return error;
  };

  return (
    <Flex
      className="login"
      height="100vh"
      backgroundColor="white"
      direction="column"
      alignItems="center"
    >
      <NextLink href="/">
        <Img
          my="20px"
          objectFit="contain"
          width="100px"
          mx="auto"
          cursor="pointer"
          src="https://cdn.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg"
        />
      </NextLink>
      <Flex
        name="login__container"
        direction="column"
        borderRadius="5px"
        border="1px solid lightgray"
        p="20px"
        width="300px"
        height="fit-content"
      >
        <Heading as="h1" fontWeight="500" mb="20px">
          Créer votre compte
        </Heading>

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values, actions) => {
            auth
              .createUserWithEmailAndPassword(values.email, values.password)
              .then((auth) => {
                console.log(auth);
                if (auth) {
                  router.push("/");
                }
              })
              .catch((error) => alert(error.message));
          }}
        >
          {(props) => (
            <Form>
              <Field name="email" validate={validateEmail}>
                {({ field, form }) => (
                  <FormControl
                    mb="10px"
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input {...field} id="email" placeholder="Email" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="password" validate={validatePassword}>
                {({ field, form }) => (
                  <FormControl
                    mb="10px"
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel htmlFor="password">Mot de passe</FormLabel>
                    <Input
                      type="password"
                      {...field}
                      id="Password"
                      placeholder="Mot de passe"
                    />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                width="100%"
                background="#f0c14b"
                borderRadius="2px"
                border="1px solid"
                mt="10px"
                borderColor="#a88734 #9c7e31 #846a29"
                color="#111"
                mt={4}
                colorScheme="teal"
                type="submit"
              >
                Créer
              </Button>
            </Form>
          )}
        </Formik>
        <Text mt="10px">Déjà un compte ?</Text>
        <NextLink href="/login">
          <ButtonAmazon mt="10px" type="submit" width="100%">
            Se connecter
          </ButtonAmazon>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default register;
