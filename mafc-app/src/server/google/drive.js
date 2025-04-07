'use server'

import { google } from "googleapis";
import { NextResponse } from "next/server";


export async function fetchAllDocxFromSubfolders(folderId) {

  try {
    const credentials =JSON.parse(process.env.NEXT_PUBLIC_GOOGLE_SERVICE_KEY);
   
    const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });

    const drive = google.drive({ version: 'v3', auth });

    // Отримуємо список папок (тем)
    const { data: foldersData } = await drive.files.list({
      q: `'${folderId}' in parents and mimeType='application/vnd.google-apps.folder'`,
      fields: 'files(id, name)',
    });

    const folders = foldersData.files;

    // Отримуємо PDF-файли для кожної папки
    const results = await Promise.all(
      folders.map(async (folder) => {
        const { data: filesData } = await drive.files.list({
          q: `'${folder.id}' in parents and (mimeType='application/pdf' or mimeType contains 'image/')`,
          fields: 'files(id, name, webViewLink,createdTime)',
        });

        return {
          topic: folder.name,
          documents: filesData.files,
        };
      })
    );

    return new NextResponse(JSON.stringify(results), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }
};




export async function fetchDocxFromCurrentFolder(folderId) {

  try {
   
    const credentials =JSON.parse(process.env.NEXT_PUBLIC_GOOGLE_SERVICE_KEY);
   
    const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });


    const drive = google.drive({ version: 'v3', auth });

    const { data: filesData } = await drive.files.list({
      q: `'${folderId}' in parents and mimeType='application/pdf'`,
      fields: 'files(id, name, webViewLink)',
       orderBy: 'createdTime desc'
    });

    const results = filesData?.files;

    return new NextResponse(JSON.stringify(results), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }
};


export async function getAllPdfFiles(folderId) {
  try {
    const credentials =JSON.parse(process.env.NEXT_PUBLIC_GOOGLE_SERVICE_KEY);
   
    const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });


    const drive = google.drive({ version: 'v3', auth });

    // Рекурсивна функція для отримання файлів із папки (PDF)
    const getFilesInFolder = async (parentFolderId) => {
      let files = [];
      let nextPageToken = null;

      do {
        // Отримуємо список файлів у папці (PDF)
        const res = await drive.files.list({
          q: `'${parentFolderId}' in parents and mimeType='application/pdf'`,
          fields: 'files(id, name, webViewLink)',
          pageToken: nextPageToken,
        });

        files = [...files, ...res.data.files];
        nextPageToken = res.data.nextPageToken;
      } while (nextPageToken);

      return files;
    };

    // Рекурсивна функція для отримання підпапок
    const getSubfolders = async (parentFolderId) => {
      let subfolders = [];
      let nextPageToken = null;

      do {
        // Отримуємо список підпапок
        const res = await drive.files.list({
          q: `'${parentFolderId}' in parents and mimeType='application/vnd.google-apps.folder'`,
          fields: 'files(id, name)',
          pageToken: nextPageToken,
        });

        subfolders = [...subfolders, ...res.data.files];
        nextPageToken = res.data.nextPageToken;
      } while (nextPageToken);

      return subfolders;
    };

    // Рекурсивна функція для отримання PDF-файлів та структури підпапок
    const fetchPdfFromSubfolders = async (parentFolderId) => {
      const subfolders = await getSubfolders(parentFolderId);
      const pdfFiles = await getFilesInFolder(parentFolderId);

      // Повертаємо об'єкт з підпапками та PDF-файлами
      const result = {
        folderId: parentFolderId,
        files: pdfFiles,
        subfolders: [],
      };

      // Для кожної підпапки рекурсивно викликаємо функцію
      for (const folder of subfolders) {
        const subfolderFiles = await fetchPdfFromSubfolders(folder.id);
        result.subfolders.push({
          folderName: folder.name,
          folderId: folder.id,
          files: subfolderFiles.files,
          subfolders: subfolderFiles.subfolders,
        });
      }

      return result;
    };

    // Отримуємо всі PDF-файли з головної папки та всіх її підпапок
    const folderStructure = await fetchPdfFromSubfolders(folderId);

    return new NextResponse(JSON.stringify(folderStructure), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }
}