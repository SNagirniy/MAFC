import SectionWrapper from "@/components/layouts/SectionWrapper";
import s from './virtual_tour.module.scss';
 const VirtualTourPage = () =>{
  return (
    <section>
      <SectionWrapper>
    <div className="">
      <iframe
        src="/tour/vr.html"
        className={s.iframe}
        allow="xr-spatial-tracking; fullscreen"
      />
    </div>
    </SectionWrapper>
    </section>

  );
};


export default VirtualTourPage;