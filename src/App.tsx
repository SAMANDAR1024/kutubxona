import axios from "axios";
import { useEffect, useState } from "react";
import { bookType } from "./component/type";

function App() {
  const [book, setBook] = useState<bookType[]>();

  useEffect(() => {
    axios
      .get("https://library.softly.uz/api/app/books?size=20&page=1&order=DESC")
      .then((res) => {
        console.log(res.data.items);

        setBook(res.data.items);
      });
  }, []);
  if (!book) {
    return <div>loading...</div>;
  }
  return (
    <div className="ml-96">
      {book.map((item) => {
        return (
          <div className="flex gap-3 items-center">
            <h2>{item.id}</h2>
            <h2>{item.name}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;

// import "./App.css";

// function App() {
//   const obj: {
//     name: string;
//     age: number;
//   } = {
//     name: "Samandar",
//     age: 16,
//   };

//   const noutbook: {
//     model: string;
//     rasm: number;
//     ssd: number;
//     yangi: boolean;
//     ekran: {
//       hajmi: number;
//       model: string;
//     };
//     portallari: {
//       nomi: string;
//       turi: string;
//     }[];
//   } = {
//     model: "Maccbook",
//     rasm: 8,
//     ssd: 256,
//     yangi: false,
//     ekran: {
//       hajmi: 1000,
//       model: "AppleInc",
//     },
//     portallari: [
//       {
//         nomi: "1",
//         turi: "USB",
//       },
//       {
//         nomi: "2",
//         turi: "TUSB",
//       },
//     ],
//   };

//   console.log(noutbook);

//   console.log(obj);

//   return <></>;
// }

// export default App;
