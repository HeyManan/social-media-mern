import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgba(0,183,255, 1)",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(0,183,255, 1)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(0,183,255, 1)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(0,183,255, 1)",
      },
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "black",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    color: "white",
  },
  textColor: {
    color: "white",
  },
  multilineColor: {
    color: "rgba(0,183,255, 1)",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
