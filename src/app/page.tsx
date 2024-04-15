import { AddForm } from "./components/AddForm/AddForm";
import { LogList } from "./components/LogList";

export default function Home() {
    return (
        <main className="container mx-auto flex min-h-screen flex-col justify-between py-24 xl:px-96">
            <LogList />
            <AddForm />
        </main>
    );
}
