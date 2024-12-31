// import { superstarSchema } from "@/app/superstar/schema";

export async function deleteSuperstar(id: number) {
  const res = await fetch(`/api/superstar/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  console.log("ANDY DELETE res", res);

  // const data = await res.json();

  // console.log("ANDY DELETE data", data);
  // if (data.error) {
  //   console.error("API Error: ", data.error);
  //   throw new Error(JSON.stringify(data.error));
  // }
  return res; // data;
  // const star = superstarSchema.parse(data);
  // return star;
}
