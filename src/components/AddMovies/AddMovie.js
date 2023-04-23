import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as yup from "yup";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { forwardRef, useState } from 'react';
import { API } from "../../global"
import './AddMovie.css'

const movieValidationSchema = yup.object({
  image: yup
    .string()
    .min(4)
    .required("Add the poster for the Movie!"),
  title: yup
    .string()
    .required("Add the title for the Movie!"),
    certificate: yup
    .string()
    .required("Add the title for the Movie!"),
  language: yup
    .string()
    .required("Add the rating for the Movie!"),
  duration: yup
    .number()
    .required("Add the description for the Movie!"),
  releaseDate: yup
    .string()
    .min(10)
    .required("Add the url for the Movie Trailer!")
})

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function AddMovie() {

  const navigate = useNavigate();

  const { handleBlur, handleChange, handleSubmit, errors, values, touched } = useFormik({
    initialValues: {
      image: '',
      title: '',
      certificate: "",
      language: "",
      duration: "",
      releaseDate:""
    },
    validationSchema: movieValidationSchema,
    onSubmit: (values) => {
      newMovie(values)
    }
  })

  const token = sessionStorage.getItem("token")

  const newMovie = (add) => {
    
      fetch(`${API}/movies`, {
        method: "POST",
        body: JSON.stringify([add]),
        headers: {
          "Content-Type": "application/json",
        },
      })
        // .then(() => navigate("/movies"))
        console.log(add)
      navigate("/allMovies")
  }


  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true)
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const isEmpty =(object)=>{
    return Object.keys(object).length === 0;
  }
  let emptyObj = isEmpty(errors);
  // console.log(emptyObj);

  return (
    <form onSubmit={handleSubmit} className='add-movie'>
      <h1 >Add Movie</h1>
      <TextField
        label="Enter poster url"
        variant="outlined"
        className="inputField"
        value={values.image}
        onChange={handleChange}
        onBlur={handleBlur}
        name="image"
        error={touched.image && errors.image}
        helperText={touched.image && errors.image ? errors.image : null} />

      <TextField
        label="Enter movie Title"
        variant="outlined"
        className="inputField"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
        name="title"
        error={touched.title && errors.title}
        helperText={touched.title && errors.title ? errors.title : null} />

      <TextField
        label="Enter movie language"
        variant="outlined"
        className="inputField"
        value={values.language}
        onChange={handleChange}
        onBlur={handleBlur}
        name="language"
        error={touched.language && errors.language}
        helperText={touched.language && errors.language ? errors.language : null} />

<TextField label="Enter movie Certificate"
        variant="outlined"
        className="inputField"
        value={values.certificate}
        onChange={handleChange}
        onBlur={handleBlur}
        name="certificate"
        error={touched.certificate && errors.certificate}
        helperText={touched.certificate && errors.certificate ? errors.certificate : null} />



      <TextField
        label="duration"
        variant="outlined"
        className="inputField"
        value={values.duration}
        onChange={handleChange}
        onBlur={handleBlur}
        name="duration"
        error={touched.duration && errors.duration}
        helperText={touched.duration && errors.duration ? errors.duration : null} />

<TextField
        label="releaseDate"
        variant="outlined"
        className="inputField"
        value={values.releaseDate}
        onChange={handleChange}
        onBlur={handleBlur}
        name="releaseDate"
        error={touched.releaseDate && errors.releaseDate}
        helperText={touched.releaseDate && errors.releaseDate ? errors.releaseDate : null} />

      <Button sx={{ margin: "auto" }} className="addMovie-btn" type='submit' variant="contained" onClick={handleClick}>
        Submit
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {emptyObj ? <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Movie Added Successfully!
        </Alert> : <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          There is an error!
        </Alert>}
      </Snackbar>

    </form>
  );
}