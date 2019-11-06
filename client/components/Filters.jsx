// import React, { Component } from 'react';
// import { render } from 'react-dom';

// class Filters extends Component {

//   render() {
//     return (
//       <div>
//         <input value={this.props.zipCode} onChange={/>
//         Filters are showing!
//         Filter with zip code
//         Filter with 
//         <div>
//           {this.props.zipCode}
//         </div>
//       </div>
//     )
//   }

// }



// export default Filters;


import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

// import ChairityList from './components/CharityList';

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function Filters(props) {
  const classes = useStyles();
  const [zip, setZip] = React.useState("90621");
  const [cause, setCause] = React.useState("");
  const [rating, setRating] = React.useState("");
  // const [age, setAge] = React.useState("");
  const handleChangeZip = event => {
    setZip(event.target.value);
  };
  const handleChangeCause = event => {
    setCause(event.target.value);
  };
  const handleChangeRating = event => {
    setRating(event.target.value);
  };
  // const handleChange = event => {
  //   setAge(event.target.value);
  // };
  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-textbox">Zipcode</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">Cause</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={cause}
          onChange={handleChangeCause}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-select-native">Rating</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={rating}
          onChange={handleChangeRating}
          input={<BootstrapInput />}
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}