import React from "react";
import { Formik } from 'formik';
import { Box, Button, CheckBoxGroup, FormField, Select, TextArea, TextInput } from "grommet";

const CreateListingForm = () => {
const initialFormState = {
    address: '',
    description: '',
    email: '',
}

const submitListing = () => {
alert('you did it!')
}

const validateForm = () => {
// go through each input, and somehow show the validation message 
}

const getListingTags = () => {
  return ['antiques', 'baby/kid clothes', 'adult clothes', 'books', 'furniture', 'toys/games', 'appliances', 'electronics', 'fitness equipment', 'plants', 'tools', 'crafts']
}

    return (
        <Formik
            initialValues={initialFormState}
            onSubmit={submitListing}
            validate={values => {
                const errors = {};
                if (!values.address) {
                  errors.address = "Address is required";
                }
                // if (!values.employeeId) {
                //   errors.employeeId = "required";
                // } else if (!values.employeeId.match(/^[0-9]+$/)) {
                //   errors.employeeId = "numeric only";
                // }
                return errors;
              }}
        >
{({
                values,
                errors,
                handleChange,
                handleSubmit,
                setFieldValue
              }) => (
                <form
                  onSubmit={event => {
                    event.preventDefault();
                    // this.setState({ submitted: true });
                    handleSubmit();
                  }}
                >
                  <FormField label="Where are you selling from?" error={errors.address}>
                    <TextInput
                      name="address"
                      value={values.address || ""}
                      onChange={handleChange}
                    />
                  </FormField>
                  <FormField label="Email" error={errors.email}>
                    <TextInput
                      name="email"
                      type="email"
                      value={values.email || ""}
                      onChange={handleChange}
                    />
                  </FormField>
                  <FormField>
                    <CheckBoxGroup 
                      options={getListingTags()}
                      onChange={handleChange}
                    />
                  </FormField>
                  <FormField label="Size" error={errors.size}>
                    <Select
                      name="size"
                      options={["small", "medium", "large"]}
                      value={values.size || ""}
                      onChange={event => setFieldValue("size", event.value)}
                    />
                  </FormField>
                  <FormField label="Comments" error={errors.comments}>
                    <TextArea
                      name="comments"
                      value={values.comments || ""}
                      onChange={handleChange}
                    />
                  </FormField>
                  <Box
                    tag="footer"
                    margin={{ top: "medium" }}
                    direction="row"
                    justify="between"
                  >
                    <Button color= "accent3" label="Cancel" />
                    <Button color="accent1" type="submit" label="Create" />
                  </Box>
                </form>
              )}
        </Formik>
      
    )
}
export default CreateListingForm;