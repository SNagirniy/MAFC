'use server'
import {fetchDocxFromCurrentFolder } from "@/server/google/drive";

const folderId = '1eMgKK-RwxvoLz2NN9Z-r9_8t2StxfMK2'

export async function GET(){
const docx = await fetchDocxFromCurrentFolder(folderId);
return docx;
};