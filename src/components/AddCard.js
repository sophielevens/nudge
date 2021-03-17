import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Card,
  Box,
  CardActionArea,
  Collapse,
  CardContent,
  TextField,
  Checkbox,
  Grid,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  label: {
    padding: theme.spacing(),
  },
  collapsableContent: {
    paddingBottom: theme.spacing(2),
  },
}));

const AddCard = () => {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(false);
  const classes = useStyles();

  const handleSave = () => {
    console.log("I am saving");
  };

  const handleChange = (event) => {
    console.log("event.target.name", event.target.name);
    console.log("event.target.checked", event.target.checked);
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  return (
    <Card raised className={classes.card}>
      <CardActionArea onClick={() => setExpanded(!expanded)}>
        <Box
          m={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="overline">Add a new reminder</Typography>
          <CreateIcon color="secondary" />
        </Box>
      </CardActionArea>
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        className={classes.collapsableContent}
      >
        <CardContent>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={6}>
              <TextField variant="outlined" label="contact name" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue="2000-20-20"
                variant="outlined"
                type="date"
                fullWidth
                label="Birthday"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                variant="outlined"
                label="email"
                fullWidth
              />
            </Grid>
            <Grid
              item
              container
              direction="column"
              xs={12}
              alignItems="flex-start"
            >
              <Typography variant="overline">
                When do you want to be reminded?
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.check1}
                      name="checked1"
                      color="primary"
                      onChange={handleChange}
                    />
                  }
                  label="2 weeks before"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.check2}
                      name="checked2"
                      color="primary"
                      onChange={handleChange}
                    />
                  }
                  label="1 week before"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.check3}
                      name="checked3"
                      color="primary"
                      onChange={handleChange}
                    />
                  }
                  label="3 days before"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.check4}
                      name="checked4"
                      color="primary"
                      onChange={handleChange}
                    />
                  }
                  label="On the day"
                />
              </FormGroup>
            </Grid>
          </Grid>
        </CardContent>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          onClick={handleSave}
        >
          Save this birthday
        </Button>
      </Collapse>
    </Card>
  );
};

export default AddCard;
