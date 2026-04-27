import { useState } from "react";
import { createPost } from "../../api/postApi";
import ExerciseItemComponent from "../exercises/ExerciseItemComponent";

const initState = {
  id: Date.now(),
  exerciseName: "",
  exerciseType: "",
  setDetails: [{ weight: 0, reps: 0 }],
};

const PostWriteComponent = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [exercises, setExercises] = useState([initState]);

  // 종목 추가
  const addExercise = () => {
    setExercises([
      ...exercises,
      {
        id: Date.now(),
        exerciseName: "",
        exerciseType: "",
        setDetails: [{ weight: 0, reps: 0 }],
      },
    ]);
  };

  // 운동 세트 추가
  const addSet = (index) => {
    const newExercises = [...exercises];
    newExercises[index] = {
      ...newExercises[index],
      setDetails: [...newExercises[index].setDetails, { weight: 0, reps: 0 }],
    };
    setExercises(newExercises);
  };

  const removeSet = (exerciseIndex, setIndex) => {
    const newExercises = [...exercises];
    const updatedSetDetails = newExercises[exerciseIndex].setDetails.filter(
      (_, index) => index !== setIndex,
    );
    newExercises[exerciseIndex] = {
      ...newExercises[exerciseIndex],
      setDetails: updatedSetDetails,
    };

    setExercises(newExercises);
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setImageFiles(Array.from(e.target.files));
    }
  };

  const handleCreate = async () => {
    const formData = new FormData();
    const postData = { title: "", content: "", exercises: exercises };

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
      <div className="w-2xl min-h-200 bg-primary border border-black shadow-2xl shadow-neutral-900 rounded-3xl m-4 p-4 flex flex-col items-center">
        <div className="flex flex-row w-full border border-gray-300 rounded-xl">
          <div className="w-7/12 p-4 border border-gray-200 m-2 rounded-sm">
            <input
              className="border border-gray-300 cursor-pointer"
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
            ></input>
            <div className="mt-2 text-sm text-gray-500 flex justify-end">
              선택된 파일: {imageFiles.length} 개
            </div>
          </div>
          <div className="w-5/12 p-4 flex-col items-center justify-center">
            <button
              className="p-2 m-2 w-3/4 flex justify-center items-center rounded-sm bg-primaryButton hover:bg-secondary"
              onClick={addExercise}
            >
              + 운동추가
            </button>
            {exercises.map((exercise, index) => (
              <ExerciseItemComponent
                key={exercise.id}
                exercise={exercise}
                addSet={() => addSet(index)}
                removeSet={(setIndex) => removeSet(index, setIndex)}
              ></ExerciseItemComponent>
            ))}
          </div>
        </div>

        {/* 등록버튼 */}
        <div
          className="bg-primaryButton m-4 p-3 text-2xl shadow shadow-neutral-600 rounded-2xl cursor-pointer hover:opacity-120 hover:border-2 border-blue-950"
          onClick={handleCreate}
        >
          등록하기
        </div>
      </div>
    </div>
  );
};

export default PostWriteComponent;
