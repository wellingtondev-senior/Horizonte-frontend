import { Button } from "@/components/ui/button";
import { CalendarDateRangePicker } from "./components/CalendarDateRangePicker";
import Dashboard from "./components/layout/Dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Stats from "./components/Stats";



const HomeColaborador = () => {

  return (
    <Dashboard>
      <div className="flex max-sm:flex-col max-sm:items-start items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Home</h2>
        <div className="flex max-sm:flex-col items-center space-x-2">
          <CalendarDateRangePicker />
        </div>
      </div>
     <Stats/>
    </Dashboard>

  );
}

export default HomeColaborador;