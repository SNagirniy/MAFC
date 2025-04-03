'use server'
import {fetchAllDocxFromSubfolders } from "@/server/google/drive";

const folderId = '1GuDuVA-Nacucxhf8QjAXOkgMCph3TRhn'

export async function GET(){
const docx = await fetchAllDocxFromSubfolders(folderId);

return docx;
};