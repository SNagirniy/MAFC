'use server'
import {fetchAllDocxFromSubfolders } from "@/server/google/drive";

const folderId = '1PEOA_nZ1cidPn6-64jFecv2gBl2w1Kuy'

export async function GET(){
const docx = await fetchAllDocxFromSubfolders(folderId);

return docx;
};