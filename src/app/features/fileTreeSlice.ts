import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

import { IClickedFile, IInitialStateTreeSlice } from "../../interface";
import { IFile } from '../../interface/index';


const initialState: IInitialStateTreeSlice = {
  openFiles: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
    activeTabId: null,
  },
  tabIdToRemove: null,
}

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openFiles = action.payload;
    },
    setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile.fileName = action.payload.fileName;
      state.clickedFile.fileContent = action.payload.fileContent;
      state.clickedFile.activeTabId = action.payload.activeTabId;
    },
    setTabIdToRemove: (state, action: PayloadAction<string | null>) => {
      state.tabIdToRemove = action.payload;
    }
  }
})

export const { setOpenFiles, setClickedFile, setTabIdToRemove } = fileTreeSlice.actions;

export default fileTreeSlice.reducer