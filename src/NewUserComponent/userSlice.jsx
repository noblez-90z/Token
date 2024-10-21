import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for sending verification code to email (sign-up)
export const sendVerificationCode = createAsyncThunk(
  "user/sendVerificationCode",
  async (
    { email, password, username, companyname, phone },
    { rejectWithValue }
  ) => {
    if (!email || !password || !username || !companyname || !phone) {
      return rejectWithValue("feild is required");
    }
    try {
      // const data = { email, password };
      const response = await axios.post(
        "https://turnserver-vqwh.onrender.com/user/signup",

        // data,
        { email, password, username, companyname, phone },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      // return response.data; // Expect { codeSent: true }
      console.log("API response:", response);
      if (response && response.data) {
        return response.data;
      } else {
        // Handle unexpected response structure
        return rejectWithValue("Unexpected API response structure.");
      }
    } catch (error) {
      console.error("Error during API call:", error);
      // const errMsg = error.response?.data?.message || " verification failed";
      //return rejectWithValue(error.response.data); //error.response.data and the const errMsg will be out if using this in the rejectwithValue()
      return rejectWithValue(error.message || "Verification failed");
    }
  }
);

// Async thunk for verifying code
export const verifyCode = createAsyncThunk(
  "user/verifyCode",
  async ({ email, code }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://turnserver-vqwh.onrender.com/user/confirmcode",
        { email, code },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      return response.data; // Expect { verified: true }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for login
export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    if (!email || !password) {
      return rejectWithValue("feild is required");
    }
    try {
      const response = await axios.post(
        "https://turnserver-vqwh.onrender.com/user/login",
        { email, password },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      // if (response && response.data) {   working fine
      //   return response.data;
      // } else {
      //   // Handle unexpected response structure
      //   return rejectWithValue("Unexpected API response structure.");
      // }
      return response.data; // Expect { token, user: { name, surname } }
    } catch (error) {
      return rejectWithValue(error.message);
      //rejectWithValue(error.response.data) this will display the error on the console and not on the screen also the response might be 'cannor read undefined reading data' if a feild is left empty
    }
  }
);

// Async thunk for forgot password
export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (email, { rejectWithValue }) => {
    if (!email) {
      return rejectWithValue("feild is required");
    }
    try {
      const response = await axios.post(
        "https://turnserver-vqwh.onrender.com/user/forgotpassword",
        { email },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      return response.data; // Expect { resetLinkSent: true }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for resetting password
export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async ({ email, newPassword, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://turnserver-vqwh.onrender.com/user/reset/password",
        {
          email,
          newPassword,
          token,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      return response.data; // Expect { passwordReset: true }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  loading: false,
  error: null,
  emailForVerification: null,
};

const userSlice = createSlice({
  name: "user",

  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Send verification code (sign-up)
      .addCase(sendVerificationCode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendVerificationCode.fulfilled, (state, action) => {
        state.loading = false;
        state.emailForVerification = action.meta.arg.email;
      })
      .addCase(sendVerificationCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Verify code
      .addCase(verifyCode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyCode.fulfilled, (state) => {
        state.loading = false;
        state.emailForVerification = null; // Clear after verification
      })
      .addCase(verifyCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.data.userDetails;
        state.token = action.payload.data.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Forgot password
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Reset password
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
