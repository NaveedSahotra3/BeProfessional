import React , {useState} from "react";
import "../signup/style.css";
import axios from "axios";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
const Signup = () => {
  
const [state, setstate] = useState({
    first_name: '',
    last_name : '',
    Profession: '',
    email : '',
    phone_number : '',
    Gender: '',
    country: '',
    city: ''    

})

const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

  const  updateData = (e) => {
    // console.log("updated");
    setstate({...state , [e.target.name]: e.target.value})
  };

  const doSignup = async (e) => {
    e.preventDefault();
    console.log(state);
  

 
   axios.post("/signup", state).then((res) => {
      if (res.data.success == true) {
        console.log(res.data.success);
        handleClickOpen()
        console.log("its realy");
      }
    });
  };

  return (
    <div>



 <div>
{
        open ?    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Thank You !!!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          You're Register now 
          Good Luck for New Journey of Development
          </DialogContentText>
        </DialogContent>
        <DialogActions>
       
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      : null
}
 </div>

      <div class="main">
        <div class="container">
          <div class="signup-content">
            <div class="signup-img">
              <img src={require("./form-img.jpg")} alt="" />
              <div class="signup-img-content">
                <h2>Register now </h2>
                <p>while seats are available !</p>
              </div>
            </div>
            <div class="signup-form">
              <h1 className="heading123"> Course Detail </h1>

              <table>
                <tr>
                  <th>Module One </th>
                  <th>Module Two </th>
                  <th>Module Three </th>
                </tr>
                <tr>
                  <td>HTML</td>
                  <td>Reactjs</td>
                  <td>Deployment</td>
                </tr>
                <tr>
                  <td>CSS</td>
                  <td>Nodejs</td>
                  <td>Test</td>
                </tr>
                <tr>
                  <td>GitHub</td>
                  <td>MongoDB</td>
                  <td> Remotely Intenship</td>
                </tr>
                <tr>
                  <td>JaveScript</td>
                  <td>Express js</td>
                  <td>Pro Training</td>
                </tr>
              </table>

              <h1 className="heading12"> Be_Professional Form </h1>
              <form class="register-form" id="register-form">
                <div class="form-row">
                  <div class="form-group">
                    <div class="form-input">
                      <label for="first_name" class="required">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        onChange={updateData}
                        id="first_name"
                      />
                    </div>
                    <div class="form-input">
                      <label for="last_name" class="required">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        onChange={updateData}
                        id="last_name"
                      />
                    </div>
                    <div class="form-input">
                      <label for="Profession" class="required">
                        Profession
                      </label>
                      <input
                        type="text"
                        name="Profession"
                        onChange={updateData}
                        id="Profession"
                      />
                    </div>
                    <div class="form-input">
                      <label for="email" class="required">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        onChange={updateData}
                        id="email"
                      />
                    </div>
                    <div class="form-input">
                      <label for="phone_number" class="required">
                        Phone number
                      </label>
                      <input
                        type="text"
                        name="phone_number"
                        onChange={updateData}
                        id="phone_number"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-radio">
                      <div class="label-flex">
                        <label for="Gender">Gender</label>
                      </div>
                      <div class="form-radio-group" onChange={updateData}>
                        <div class="form-radio-item">
                          <input
                            type="radio"
                            name="Gender"
                            value="Female"
                            id="Female"
                          />
                          <label for="Female">Female</label>
                          <span class="check"></span>
                        </div>
                        <div class="form-radio-item">
                          <input
                            type="radio"
                            name="Gender"
                            value="Male"
                            id="Male"
                          />
                          <label for="Male">Male</label>
                          <span class="check"></span>
                        </div>
                      </div>
                    </div>
                    <div class="form-input">
                      <label for="country">Country</label>
                      <input
                        onChange={updateData}
                        type="text"
                        name="country"
                        id="country"
                      />
                    </div>
                    <div class="form-input">
                      <label for="city">City</label>
                      <input
                        type="text"
                        onChange={updateData}
                        name="city"
                        id="city"
                      />
                    </div>
                  </div>
                </div>

                <div class="form-submit">
                  <button
                    type="submit"
                    value="Submit"
                    onClick={doSignup}
                    class="submit"
                    id="submit"
                    name="submit"
                  >
                    Save
                  </button>
                  <input
                    type="submit"
                    value="Reset"
                    class="submit"
                    id="reset"
                    name="reset"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

// render(){

export default Signup;
