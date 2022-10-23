import {configureStore} from '@reduxjs/toolkit';
import userName from "./slice/UserName.slice";



export default configureStore({
    reducer:{
        userName,
    }
});


// import { configureStore } from "@reduxjs/toolkit";
// import userName from './slices/userName.slice'

// export default configureStore({
//   reducer: {
//     userName
//   }
// })