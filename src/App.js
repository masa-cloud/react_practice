import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PtimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SerchInput } from "./components/molucules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templetes/DefaultLayout";
import { HeaderOnly } from "./components/templetes/HeaderOnly";
import "./styles.css";

const user = {
  name: "まさ",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "12345@exmple.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SerchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
