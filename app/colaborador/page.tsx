import { Button } from "@/components/ui/button";
import { CalendarDateRangePicker } from "./components/CalendarDateRangePicker";
import Dashboard from "./components/layout/Dashboard";



const HomeColaborador = () => {
    
    return (
        <Dashboard>
            <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
        </Dashboard>

    );
}

export default HomeColaborador;