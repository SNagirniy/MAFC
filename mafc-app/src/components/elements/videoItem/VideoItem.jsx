import s from './video_item.module.scss';

const VideoItem = ({item, id})=> {
    return <iframe
            id={`youtube-${id}`}
            className={s.current_video}
            src={`https://www.youtube.com/embed/${item?.video_id}?enablejsapi=1`}
            title={item?.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; encrypted-media"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin" 
          /> 
};
export default VideoItem;