'use server'
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";

const folderId = '1Z95-rXOpynkFKKnH7hlIz-Dl28sCY_Te'

export async function GET(){
const docx = await fetchAllDocxFromSubfolders(folderId);
return docx;
};