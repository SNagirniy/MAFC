'use server'
import {fetchDocxFromCurrentFolder } from "@/server/google/drive";

const folderId = '1GQIKIzO5Ub4Wex5WT1t3unnN_tLvpncm'

export async function GET(){
const docx = await fetchDocxFromCurrentFolder(folderId);
return docx;
};