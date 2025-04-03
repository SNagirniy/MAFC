'use server'

import { fetchAllDocxFromSubfolders } from "@/server/google/drive";

const folderId = '1GxOZ_Epzb7dNCkbnwx3sS9r-UpdT_KQY'

export async function GET(){
const docx = await fetchAllDocxFromSubfolders(folderId);
return docx;
};