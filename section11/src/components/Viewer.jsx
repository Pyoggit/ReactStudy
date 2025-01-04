import "./Viewer.css";
import { getEmotionImage } from "../util/get-emotion-images";
import { emotionList } from "../util/constants";

const Viewer = ({ emotionId, content }) => {
  console.log("Emotion ID:", emotionId);
  console.log("Content:", content);

  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );
  console.log("Emotion Item:", emotionItem);

  if (!emotionItem) {
    return <div>감정을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_img_wrapper">
          <img src={getEmotionImage(emotionItem.emotionId)} alt="Emotion" />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
