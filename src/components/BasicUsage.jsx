import { useActionState, useState } from "react";

async function handleSubmit(prevState, formData) {
  await new Promise((res) => setTimeout(res, 1000));

  const movieName = formData.get("movieName");
  // console.log("Movie Name:", movieName);

  return movieName;
}

const BasicUsage = () => {
  const [data, action, isPending] = useActionState(handleSubmit, "");
  const [count, setCount] = useState(null);
   console.log(data);
  console.log(count);

  return (
    <>
      <form action={action}>
        <input
          className="border border-gray-600 rounded mx-2 w-96 h-9 p-1"
          type="text"
          name="movieName"
          placeholder="Search a movie"
          disabled={isPending}
        />

        <button
          className="bg-black text-white p-1 rounded text-xl"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </form>

      <p>
        {isPending
          ? `Searching for ${data}`
          : data
          ? `Last searched: ${data}`
          : ""}
      </p>

      <div className="flex gap-3">
        {count}
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      </div>
    </>
  );
};

export default BasicUsage;
