import { Metadata } from "next";
import SuperstarDetail from "./detail";
import Footer from "../../../components/footer";

export const metadata: Metadata = {
  title: "Superstar",
};

export default async function EditSuperstar(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-poppins-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <SuperstarDetail id={Number(id)} />
      </main>

      <Footer />
    </div>
  );
}
