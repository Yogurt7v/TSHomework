interface SingleComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

const getData = async (url : string) : Promise<SingleComment[]> => {
  const response = await fetch(url);
  const data: SingleComment[] = await response.json();
  return data;
};

getData(COMMENTS_URL).then((data) => {
  let results : { id: number, email: string }[] = [];
  data.map((item) => {
    results.push({ id: item.id, email: item.email });
  });
  console.log(results);
});

