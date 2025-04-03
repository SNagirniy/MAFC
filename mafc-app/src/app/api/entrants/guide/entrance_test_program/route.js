'use server'

import { fetchDocxFromCurrentFolder } from "@/server/google/drive";

const folderId = '1pZQ1HolwoplaA0uKJbu3RHJBm_vNrlHq'

export async function GET(){
const docx = await fetchDocxFromCurrentFolder(folderId);
return docx;
};