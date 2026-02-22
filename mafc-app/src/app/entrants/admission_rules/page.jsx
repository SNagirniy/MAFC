import PageWrapper from "@/components/layouts/PageWrapper";
import DocsListSection from "@/components/modules/DocsListSection/DocsListSection";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import { fetchDocxFromCurrentFolder } from "@/server/google/drive";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/entrants/admission_rules');

const AdmisionRules = async()=>{

    const GDFolderId = '1GsM1RvZuGLakC8JqTsfkOlBNGnNd7r7f'

    const docxList = await fetchDocxFromCurrentFolder(GDFolderId);

    if(!docxList || docxList?.error || docxList?.documents?.length === 0) return <EmptyState/>;

    return <PageWrapper main_title={docxList?.topic}>
                <DocsListSection docs_list={docxList?.documents}/>
          </PageWrapper>

};

export default AdmisionRules;