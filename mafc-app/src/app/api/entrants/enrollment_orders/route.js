'use server'
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";

const folderIds = {
    '9': '1P6TUQWUYwvYfTOQEupTNPlixrmpK_SGa',
    '11':'16GyHYXvw0izRzny_umYRMrBQsQgp9V6B',
    'ptu': '1FqJwVUhoq4zk94wjpW1lJjsYL_Ka0aZK',
    'correspondence_form': '1ZUydwKlIzwNfur1jzvH9O0nICtI1kpqt'
}

export async function GET(req) {
    try {
        // Отримуємо параметри запиту з URL
        const { searchParams } = new URL(req.url);
        const base = searchParams.get('basic_education'); // Отримуємо значення параметра


        if (!base || !folderIds[base]) {
            return new Response(JSON.stringify({ error: 'Invalid or missing parameter' }), { status: 400 });
        }

        // Отримуємо PDF-файли для потрібної папки
        const res = await fetchAllDocxFromSubfolders(folderIds[base]);
        const docx = await res.json();
       
        return new Response(JSON.stringify(docx), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}