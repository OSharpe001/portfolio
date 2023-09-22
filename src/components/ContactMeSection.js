import React, {useEffect} from "react";
import { ErrorMessage, useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import { sendEmail } from "./EmailMe";

export default function LandingSection() {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const clearForm=()=>{
    setTimeout(formik.resetForm, 3000);
    setTimeout(formik.setTouched, 3000, "false");
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      type:'',
      comment: '',
    },
    onSubmit: (values) => {
      submit("http://localhost:3000", values);
      if (response.type==="success") {
        formik.resetForm();
        formik.setTouched("false");
        onOpen(response.type,response.message);
      } else {
      onOpen(response.type,response.message);
      }
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().required("Required"),
    }),
  });

  const disabled= !!formik.errors.name || !!formik.errors.comment || !!formik.errors.type || !!formik.errors.email

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack id="contactme-section" w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-header">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit= {formik.handleSubmit}>
            <VStack spacing={4}>

              <FormControl isInvalid={(formik.touched.name && formik.values.name==="")}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onFocus={()=> formik.touched.name=true}
                />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.email && formik.values.email===""}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onFocus={()=> formik.touched.email=true}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.type && formik.values.type===""}>
                <FormLabel htmlFor="type">Type of inquiry</FormLabel>
                <Select id="type" name="type"
                    onChange={formik.handleChange}
                    value={formik.values.type}
                    onFocus={()=> formik.touched.type=true}
                    >
                  <option value="">Service Context?</option>
                  <option value="Career Opportunity">Career Opportunity</option>
                  <option value="Freelance Project Proposal">Freelance Project Proposal</option>
                  <option value="Open Source Consultancy Session">Open Source Consultancy Session</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.comment && formik.values.comment===""}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                  onFocus={()=> formik.touched.comment=true}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              <Button className={disabled? "form-button": "form-button ready"} colorScheme="purple" width="full" onClick={clearForm} disabled={disabled}>
                {sendEmail({
                  name:formik.values.name,
                  email:formik.values.email,
                  inquery:formik.values.type,
                  message:formik.values.comment,
                })}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};
