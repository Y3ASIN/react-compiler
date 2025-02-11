import { useActionState } from "react";

async function handleSubmit(prevState, formData) {
  await new Promise((res) => setTimeout(res, 1000)); 

  const movieName = formData.get("movieName");
  // console.log("Movie Name:", movieName);

  return movieName; // Ensure returning new state
}

// async function increment(previousState) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(previousState + 1);
//     }, 1000);
//   });
// }

// function Submit() {
//   const { isPending } = useActionState(handleSubmit);
//   console.log(isPending);

//   return (
//     <div>
//       <input
//         className="border border-gray-600 rounded mx-2 w-96 h-9 p-1"
//         type="text"
//         name="movieName"
//         placeholder="Search a movie"
//         disabled={isPending}
//       />

//       <button
//         className="bg-black text-white p-1 rounded text-3xl"
//         type="submit"
//         disabled={isPending}
//       >
//         {isPending ? "Submitting..." : "Submit"}
//       </button>
//     </div>
//   );
// }

// <form>
//   <span className="ml-2"> {state} </span>
//   <button
//     className="bg-black text-white p-1 rounded text-lg"
//     formAction={formAction}
//   >
//     {isPending ? "Incrementing..." : "Increment"}
//   </button>
// </form>

const BasicUsage = () => {
  const [data, action, isPending] = useActionState(handleSubmit, "");
  console.log(data);

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
    </>
  );
};

export default BasicUsage;
