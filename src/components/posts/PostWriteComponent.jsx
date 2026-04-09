const PostWriteComponent = () => {
  return (
    <div>
      PostWriteComponent
      <div className="w-2xl min-h-200 text-black bg-secondary rounded-3xl m-4 p-4 flex flex-col items-center">
        <div className="flex flex-row w-full bg-white">
          <div className="w-7/12 p-4 bg-blue-100">사진 이미지</div>
          <div className="w-5/12 p-4 bg-green-100">일지추가</div>
        </div>
        {/* 등록버튼 */}
        <div
          className="bg-primaryButton m-4 p-3 text-2xl shadow shadow-neutral-600 rounded-2xl cursor-pointer hover:opacity-120 hover:border-2 border-blue-950"
          onClick={() => {}}
        >
          등록하기
        </div>
      </div>
    </div>
  );
};

export default PostWriteComponent;
