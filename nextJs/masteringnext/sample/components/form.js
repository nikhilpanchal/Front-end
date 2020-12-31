import { Field, Button, Heading } from '@theme-ui/components'

const Form = () => {
  return (
    <>
      <Heading>Subscribe to my newsletter</Heading>
      <Field defaultValue='' mb={2} label='Email' name='email' />
      <Field defaultValue='' mb={2} label='First Name' name='name' />
      <Button>Submit</Button>
    </>
  )
}

export default Form
