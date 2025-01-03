import { Metadata } from "next";
import SuperstarDetail from "./detail";

export const metadata: Metadata = {
  title: "Superstar",
};

export default async function EditSuperstar(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;

  return (
    <div className="grid grid-rows-[0px_1fr_0px] items-center justify-items-center pb-4 sm:p-4 font-[family-name:var(--font-poppins-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <SuperstarDetail id={Number(id)} />
      </main>
    </div>
  );
}
