'use server'
import {fetchAllDocxFromSubfolders } from "@/server/google/drive";

const folderId = '1oDMDU8YAFvY7XyBrv4Za6TykF44KUWCy'

export async function GET(){
const docx = await fetchAllDocxFromSubfolders(folderId);

return docx;
};