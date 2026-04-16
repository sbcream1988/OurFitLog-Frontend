import { useState } from "react";
import { createPost } from "../../api/postApi";

const PostWriteComponent = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const handleFileChange = (e) => {
    if (e.target.files) {
      setImageFiles(Array.from(e.target.files));
    }
  };

  const handleCreate = async () => {
    const formData = new FormData();
    const postData = {};

    formData.append(
      "requestDto",
      new Blob([JSON.stringify(postData)], { type: "application/json" }),
    );

    if (imageFiles.length > 0) {
      imageFiles.forEach((file) => formData.append("images", file));
    }

    try {
      const result = await createPost(formData);
      alert("등록 성공");
      console.log(result);
    } catch (e) {
      console.error("등록 실패", e);
    }
  };

  return (
    <div>
      PostWriteComponent
      <div className="w-2xl min-h-200 text-black bg-secondary rounded-3xl m-4 p-4 flex flex-col items-center">
        <div className="flex flex-row w-full bg-white">
          <div className="w-7/12 p-4 bg-blue-100">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={() => {
                handleFileChange;
              }}
            ></input>
            <div className="mt-2 text-sm text-gray-500">
              선택된 파일:{imageFiles.length} 개
            </div>
          </div>
          <div className="w-5/12 p-4 bg-green-100">일지추가</div>
        </div>
        {/* 등록버튼 */}
        <div
          className="bg-primaryButton m-4 p-3 text-2xl shadow shadow-neutral-600 rounded-2xl cursor-pointer hover:opacity-120 hover:border-2 border-blue-950"
          onClick={() => {
            handleCreate;
          }}
        >
          등록하기
        </div>
      </div>
    </div>
  );
};

export default PostWriteComponent;
