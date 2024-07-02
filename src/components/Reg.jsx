import { Button, TextField } from '@mui/material'
import React from 'react'

const Reg = () => {
  return (
    <div>
     <TextField id="outlined-basic" label="Name" variant="outlined" />
     <br /><br />
     <TextField id="outlined-basic" label="Age" variant="outlined" />
     <br /><br />
     <TextField id="outlined-basic" label="Email" variant="outlined" />
     <br /><br />
     <TextField id="outlined-basic" label="Mother's Name" variant="outlined" />
     <br /><br />
     <TextField id="outlined-basic" label="Father's Name" variant="outlined" />
     <br /><br />
     <TextField id="outlined-basic" label="Password" variant="outlined" />
     <br /><br />
     <TextField id="outlined-basic" label="Confirm password" variant="outlined" />
     <br /><br />
     <Button variant="contained" color='error'>Submit</Button>


    </div>
  );
};

export default Reg
