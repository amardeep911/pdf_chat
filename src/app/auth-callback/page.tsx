import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
const page = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  return (
    <div>
      <h1>Auth Callback</h1>
    </div>
  );
};

export default page;
