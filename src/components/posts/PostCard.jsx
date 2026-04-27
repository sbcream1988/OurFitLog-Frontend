import { useEffect, useRef, useState } from "react";
import { LuHeart, LuSend, LuShare, LuShare2, LuThumbsUp } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { getOrCreateRooms } from "../../api/chatApi";

const PostCard = ({ post }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCreateDm = async () => {
    console.log("포스트", post);
    try {
      const partnerId = post.memberId;
      if (!partnerId) {
        alert("작성자 정보를 찾을수 없습니다");
        return;
      }
      const res = await getOrCreateRooms(partnerId);
      if (res && res.data) {
        navigate(`/chat/${res.data}`);
      }
    } catch (error) {
      console.error("채팅방 연결 에러", error);
      alert("채팅 서비스에 문제가 발생했습니다");
    }
  };
  if (!post) return null;

  return (
    <div className="flex flex-col w-full min-w-xl border border-gray-700 rounded-3xl shadow-2xl shadow-neutral-900 overflow-hidden my-4">
      {/* Header 타이틀 유저정보? */}
      <div className="bg-primaryButton text-white text-xl font-bold rounded-t-3xl p-4 px-6 flex justify-between items-center">
        <div className="relative" ref={menuRef}>
          <span>
            <span className="cursor-pointer" onClick={toggleMenu}>
              {post.nickname}
            </span>
            <span className="text-lg">님의 오늘의 운동일지</span>
          </span>
          <span className="text-sm font-normal justify-end opacity-80">
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
          {isMenuOpen && (
            <div className="absolute text-sm bg-gray-400 top-6 left-16 border border-gray-500 rounded-xl shadow-xl z-50 overflow-hidden">
              {/* 프로필 이동 */}
              <div className="flex items-center gap-2 p-3 hover:bg-gray-700 cursor-pointer">
                프로필 보기
              </div>
              <hr></hr>
              {/* 채팅 */}
              <div
                className="flex items-center gap-2 p-3 hover:bg-gray-700 cursor-pointer"
                onClick={() => {
                  handleCreateDm();
                  setIsMenuOpen(false);
                }}
              >
                메시지 보내기
              </div>
            </div>
          )}
        </div>
      </div>
      {/* 프로필 메뉴 */}

      {/* 이미지 */}
      <div className="flex flex-row border-b border-gray-500">
        <div className="w-7/12 p-4">
          <div className="aspect-square bg-gray-200 border border-dashed border-gray-400 rounded-2xl flex items-center justify-center text-gray-500">
            {post.images && post.images.length > 0 ? (
              <img
                src={post.images[0].imageUrl}
                alt="post"
                className="w-full h-full object-over"
              ></img>
            ) : (
              <div>사진 없음</div>
            )}
          </div>
        </div>
        {/* 일지(Exercise) */}
        <div className="w-5/12  p-4 flex flex-col gap-2">
          <h3 className="font-bold text-lg" onClick={() => {}}>
            {post.title}
          </h3>
          <div className="p-2 border border-gray-500 rounded-xl">
            <ul className="text-sm text-white space-y-1">
              <li>- 스쿼트 80kg 5x5</li>
              <li>- 벤치프레스 60kg 5x5</li>
              <li>- 데드리프트 100kg 3x5</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border border-gray-500 rounded-xl h-/12 m-4 p-4">
        <p className="font-bold pb-2">오늘의 메모</p>
        <p className="text-sm">{post.content}</p>
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
            className="flex-1 border border-gray-500 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-400"
            placeholder="댓글을 입력하세요"
          ></input>
          <button className="bg-secondary px-4 py-2 rounded-xl text-sm font-bold hover:opacity-80 border border-gray-500">
            추가
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
