'use server'
import {fetchAllDocxFromSubfolders } from "@/server/google/drive";

const folderId = '1GeXqveybi1YDCJrI61ydo62aVfpzmu02'

export async function GET(){
const docx = await fetchAllDocxFromSubfolders(folderId);

return docx;
};