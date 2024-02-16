import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

export interface compilerSliceStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
  currentLanguage: "html" | "css" | "javascript";
}

const initialState: compilerSliceStateType = {
  fullCode: {
    html: `<h1>Welcome to CodeCraft!</h1>
<p>Write your HTML, CSS, and JavaScript Code here.</p>
<button id="clickMeBtn">Click Me</button>`,
    css: `body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      text-align: center;
  }
  
h1 {
      color: #333;
  }
  
p {
      color: #666;
  }
  
button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
  }
  
button:hover {
      background-color: #0056b3;
  }
  `,
    javascript: `document.getElementById("clickMeBtn").addEventListener("click", function() {
        alert("Desinged and Created by Mohd Aadil");
    });
    `,
  },
  currentLanguage: "html",
};

const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<compilerSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updatecodeValue: (state, action: PayloadAction<string>) => {
      state.fullCode[state.currentLanguage] = action.payload;
    },
    updateFullCode: (
      state,
      action: PayloadAction<compilerSliceStateType["fullCode"]>
    ) => {
      state.fullCode = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updatecodeValue, updateFullCode } =
  compilerSlice.actions;
