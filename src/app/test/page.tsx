export default async function Page() {
  const data = await fetch(`${process.env.API_URL}/users`);
  const res = await data.json();

  console.log(res);
  return <div className="p-4"></div>;
}
