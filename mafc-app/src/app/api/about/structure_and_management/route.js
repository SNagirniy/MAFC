'use server'
import {fetchAllDocxFromSubfolders } from "@/server/google/drive";

const folderId = '1BvY-87ywvw4mCdnXBXw49ACcu6MOPgsF'

export async function GET(){
const docx = await fetchAllDocxFromSubfolders(folderId);

return docx;
};