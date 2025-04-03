'use server'
import { fetchDocxFromCurrentFolder } from "@/server/google/drive";

const folderId = '1BBlEPPneQXEwqd-jB5dfeivhWtTyafa2';

export async function GET() {
    try {

        // Отримуємо PDF-файли для потрібної папки
        const res = await fetchDocxFromCurrentFolder(folderId);
        const docx = await res.json();
       
        return new Response(JSON.stringify(docx), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}