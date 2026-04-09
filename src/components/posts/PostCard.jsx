import { LuHeart, LuSend, LuShare, LuShare2, LuThumbsUp } from "react-icons/lu";

const PostCard = () => {
  return (
    <div className="flex flex-col w-full max-w-2xl border border-gray-200 rounded-3xl shadow-lg overflow-hidden my-4">
      {/* Header 타이틀 유저정보? */}
      <div className="bg-primaryButton text-white text-xl font-bold rounded-t-3xl p-4 px-6 flex justify-between items-center">
        <span>오늘의 운동일지</span>
        <span className="text-sm font-normal justify-end opacity-80">
          2026.04.09
        </span>
      </div>
      {/* 이미지 */}
      <div className="flex flex-row border-b border-gray-100">
        <div className="w-7/12 p-4">
          <div className="aspect-square bg-gray-200 border border-dashed border-gray-400 rounded-2xl flex items-center justify-center text-gray-500">
            인증 사진
          </div>
        </div>
        {/* 일지 */}
        <div className="w-5/12  p-4 flex flex-col gap-2">
          <h3 className="font-bold text-blue-600">운동 리스트</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>- 스쿼트 80kg 5x5</li>
            <li>- 벤치프레스 60kg 5x5</li>
            <li>- 데드리프트 100kg 3x5</li>
          </ul>
        </div>
      </div>
      {/* 공유 좋아요 */}
      <div className="flex justify-end m-2 p-2 border-black gap-2">
        <LuThumbsUp
          className="hover:cursor-pointer"
          onClick={() => {}}
        ></LuThumbsUp>
        <LuHeart className="hover:cursor-pointer" onClick={() => {}}></LuHeart>
        <LuShare2
          className="hover:cursor-pointer"
          onClick={() => {}}
        ></LuShare2>
      </div>
      {/* 댓글 */}
      <div className="px-6 pb-6 pt-2">
        <div className="mb-4 space-y-2">
          <div className="text-sm">
            <span className="font-bold mr-2">
              헬린이1:<div>화이팅</div>
            </span>
          </div>
          <div className="text-sm">
            <span className="font-bold mr-2">
              운동러:<div>나도 오운완!</div>
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <input
            className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-400"
            placeholder="댓글을 입력하세요"
          ></input>
          <button className="bg-secondary px-4 py-2 rounded-xl text-sm font-bold hover:opacity-80">
            추가
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
