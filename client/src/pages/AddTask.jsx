import { Form, Formik } from "formik";
import { createTaskRequest } from "../api/tasks.api";

function AddTask() {
  return (
    <div className="form">
      <Formik
        initialValues={{
          title: "",
          content: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await createTaskRequest(values);
            console.log(response);
          } catch (err) {
            console.log("Error: " + err);
          }
        }}
      >
        {({handleChange, handleSubmit}) => (
        <Form onSubmit={handleSubmit}>
          <label>Titulo</label>
          <input
            type="text"
            name="titulo"
            placeholder="Escriba un titulo"
            onChange={handleChange}
          />
          <label>Contenido</label>
          <input
            type="text"
            name="content"
            placeholder="Contenido de tu nota"
            onChange={handleChange}
          />
          <input type="submit" value="enviar" />
        </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddTask;
