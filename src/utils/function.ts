import { IFile } from "../interface";

export const doesFileExist = (files: IFile[], id: string | null) => {
  return files.some((file) => file.id === id);
}