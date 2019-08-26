import { SubmissionError } from 'redux-form';
import * as actions from '../Store/Actions/index';
import {store} from '../Store/Store';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const submit=(values)=> {
  return sleep(1000).then(() => {
    // simulate server latency
    // if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
    //   throw new SubmissionError({
    //     username: 'User does not exist',
    //     _error: 'Login failed!'
    //   })
    // } else if (values.password !== 'redux-form') {
    //   throw new SubmissionError({
    //     password: 'Wrong password',
    //     _error: 'Login failed!'
    //   })
    // } else {
      let authData={
        LoginVM:{
          Email:values.Email,
          Password:values.Password,
          Role:"Seller"
        },
        FirstName:values.FirstName,
        LastName:values.LastName,
        MobileNumber:values.MobileNumber,
        VehicleNo:values.VehicleNo,
        VehicleType:values.VehicleType,
        returnSecureToken: true,
      }
      console.log(values);
      store.dispatch(actions.auth(authData));
      //alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      
      
 
       }) 
}

export default submit;