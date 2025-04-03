'use server'

import { fetchDocxFromCurrentFolder } from "@/server/google/drive";

const folderId = '1AeT0ixmsIIhHhuRFzwzAg6SwXajTVUpq'

export async function GET(){
const docx = await fetchDocxFromCurrentFolder(folderId);
return docx;
};