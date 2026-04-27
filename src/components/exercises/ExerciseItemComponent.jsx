const ExerciseItemComponent = ({ exercise, addSet, removeSet }) => {
  return (
    <div className="">
      <div className="flex flex-col border border-gray-300 rounded-sm">
        <input
          className="rounded-sm border border-gray-300 p-2 m-2"
          value={exercise.exerciseName}
          onChange={() => {}}
        ></input>
        {/* Header */}
        <div className="flex justify-between gap-4 items-center m-2">
          <span className="w-3/12 rounded-sm text-center">세트</span>
          <span className="w-3/12 rounded-sm text-center">무게</span>
          <span className="w-3/12 rounded-sm text-center">횟수</span>
          <span className="w-3/12 rounded-sm text-center">삭제</span>
        </div>
        {/* 입력값 */}
        {exercise.setDetails.map((set, index) => (
          <div className="flex justify-between gap-4 items-center m-2">
            <span className="border border-gray-300 w-3/12 rounded-sm text-center">
              {index + 1}
            </span>
            <input
              className="border border-gray-300 w-3/12 rounded-sm text-center"
              value={set.weight}
            ></input>
            <input
              className="border border-gray-300 w-3/12 rounded-sm text-center"
              value={set.reps}
            ></input>
            <button
              className="border border-gray-300 w-3/12 rounded-sm text-center bg-red-400"
              onClick={() => removeSet(index)}
            >
              삭제
            </button>
          </div>
        ))}

        <button
          className="items-center justify-center rounded-sm m-2 p-2 bg-primaryButton hover:bg-secondary"
          onClick={addSet}
        >
          + 세트추가
        </button>
      </div>
    </div>
  );
};

export default ExerciseItemComponent;
