import Form from "./components/form";
import LoginButton from "./components/LoginButton";
import { cookies } from 'next/headers';

export default function Home() {


//check if user has access token
const cookie = cookies();
const hasCookie = cookie.has('access_token');

  return (
    <div className="flex flex-col gap-10 text-coal bg-[#EEEDF8] align-items justify-center">
      {/* className="bg-[#EEEDF8] px-5 py-[56px] text-coal transition-all duration-[200ms] tablet:py-[100px] null" */}
      <h1>Generate a pdf resume from a Linkedin Page</h1>
      {hasCookie ? <Form /> : <LoginButton />}
    </div>
  );
}
