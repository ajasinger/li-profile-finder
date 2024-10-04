import Form from "./components/form";

export default function Home() {

  return (
    <div className="flex flex-col gap-10 align-items justify-center">
      <h1>Generate a pdf resume from a Linkedin Page</h1>
      <Form />
    </div>
  );
}
