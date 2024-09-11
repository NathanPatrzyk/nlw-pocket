import { Dialog } from "./components/ui/dialog";
import { EmptyGoals } from "./components/empty-goals";
import { Summary } from "./components/summary";
import { CreateGoal } from "./components/create-goal";
import { useEffect, useState } from "react";

type SummaryResponse = {
  id: string;
  title: string;
  completedAt: string;
}[];

export function App() {
  const [summary, setSummary] = useState<SummaryResponse | null>(null);

  useEffect(() => {
    fetch("http://localhost:3333/summary")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSummary(data.summary);
      });
  }, []);

  return (
    <Dialog>
      {summary?.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  );
}

export default App;
