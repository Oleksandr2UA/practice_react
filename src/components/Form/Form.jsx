import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';
import { object, string, number } from 'yup';

import { ErrorMessage, Wrapper } from './Form.styled';

const ValidationScheme = object({
  name: string().min(2, 'Too short').max(50, 'Too long').required('Required'),
  image: string().min(3, 'Too short').required('Required'),
  time: number().positive('!!! > 0 !!!').required('Required'),
  servings: number().positive('!!! > 0 !!!').required('Required'),
  calories: number().positive('!!! > 0 !!!').required('Required'),
  difficulty: string().oneOf(['easy', 'medium', 'hard']).required('Required!'),
});
export const MyForm = ({ onSubmit }) => {
  return (
    <>
      <h1>Add new recipe</h1>
      <Formik
        initialValues={{
          name: '',
          image: '',
          time: 0,
          servings: 0,
          calories: 0,
          difficulty: 'easy',
        }}
        validationSchema={ValidationScheme}
        onSubmit={(values, actions) => {
          const id = nanoid();
          onSubmit({ ...values, id });

          actions.resetForm(); // Built in Formik
        }}
      >
        <Wrapper>
          <Form>
            <label>
              Name
              <Field name="name" placeholder="" />
              <ErrorMessage name="name" component="span" />
              <br />
              <br />
            </label>
            <label htmlFor="image">
              Image
              <Field
                id="image"
                name="image"
                placeholder="https://assets.bonappetit.com/photos/62cc4eca787a907e535e8e7f/1:1/w_2580%2Cc_limit/0711-black-bean-burger-lede.jpg"
              />
              <ErrorMessage name="image" component="span" />
              <br />
            </label>
            <label>
              Time
              <Field name="time" placeholder="" type="number" />
              <ErrorMessage name="time" component="span" />
              <br />
            </label>
            <label>
              Servings
              <Field name="servings" type="number" />
              <ErrorMessage name="servings" component="span" />
              <br />
            </label>
            <label>
              Calories
              <Field name="calories" placeholder="" type="number" />
              <ErrorMessage name="calories" component="span" />
              <br />
            </label>

            <label htmlFor="location">
              Choose difficulty
              <br />
              <Field as="select" name="difficulty" multiple={false}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </Field>
              <br />
              <ErrorMessage name="difficulty" component="span" />
            </label>

            <button type="submit">Submit</button>
          </Form>
        </Wrapper>
      </Formik>
    </>
  );
};
