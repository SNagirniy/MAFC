'use server'

import { fetchAllDocxFromSubfolders } from "@/server/google/drive";


const folderIds={
    crop_production: '1VcB1anOyE7Tq4i5DeYDOPKXqCzeK2ahA',
    farming: '1NztqOLpXwPhkfvUWheo6iG4ANK_LoRB6',
    animal_husbandry: '1tpX6wktKqfypJIfiScMBCbtosTHudHXw',
    management: '1-7b-0KxIFWgYPkMfc6uR5OnSaeKEh2kM',
    finance: '12jvXG2RYyc2_7fhS6152gQBF5qI6_t3_',
    mechanics: '1x68R6THysyHkvgL2wX1SfvuiW6apoTyB', };

export async function GET(req) {
    try {
        // Отримуємо параметри запиту з URL
        const { searchParams } = new URL(req.url);
        const profession = searchParams.get('profession'); // Отримуємо значення параметра


        if (!profession || !folderIds[profession]) {
            return new Response(JSON.stringify({ error: 'Invalid or missing parameter' }), { status: 400 });
        }

        // Отримуємо PDF-файли для потрібної папки
        const res = await fetchAllDocxFromSubfolders(folderIds[profession]);
        const docx = await res.json();

       
        return new Response(JSON.stringify(docx), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}