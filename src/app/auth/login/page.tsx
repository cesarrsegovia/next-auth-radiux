import { Button } from "@radix-ui/themes";
import { BookmarkIcon } from "@radix-ui/react-icons";

function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <Button>
        <BookmarkIcon width="16" height="16"/> Bookmark
      </Button>
    </div>
  );
}

export default LoginPage;