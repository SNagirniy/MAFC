import VirtualTourPage from "@/components/modules/VirtualTour/VirtualTourPage";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
export const metadata = generateStaticPageMeta('Ознайомтесь із територією та матеріальною базою коледжу онлайн.');

export default function VirtualTour() {
  return <VirtualTourPage/>
};