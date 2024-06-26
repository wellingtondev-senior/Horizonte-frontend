import { ProgressBar } from "@/components/ProgessBar"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]


export function TableAreaTotalProjeto() {
  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between gap-4 mb-4 h-[50px] bg-gray-100 px-4 rounded-full">
        <span className="font-bold text-[14px] text-gray-800">Projetos Por Área</span>
        <span className="font-bold text-[14px] text-gray-800">Total de Projetos</span>
      </div>
      <div className="h-[300px] flex flex-col items-start gap-4 mb-4 overflow-y-auto">
        <div className="w-full h-[40px] flex items-end justify-between gap-4 ">
          <div className="w-full  flex flex-col justify-end gap-2">
            <span className="font-bold text-[14px] h-[14px] text-gray-600">Licenciamento Ambiental</span>
            <ProgressBar progress={50} colorIndicator="#02B2AF" />
          </div>
          <span className="w-100px font-bold text-[12px] text-gray-600 ">19</span>
        </div>
        <div className="w-full h-[40px] flex items-end justify-between gap-4 ">
          <div className="w-full  flex flex-col justify-end gap-2">
            <span className="font-bold text-[14px] h-[14px] text-gray-600">Licenciamento Ambiental</span>
            <ProgressBar progress={50} colorIndicator="#02B2AF" />
          </div>
          <span className="w-100px font-bold text-[12px] text-gray-600 ">19</span>
        </div>
        <div className="w-full h-[40px] flex items-end justify-between gap-4 ">
          <div className="w-full  flex flex-col justify-end gap-2">
            <span className="font-bold text-[14px] h-[14px] text-gray-600">Licenciamento Ambiental</span>
            <ProgressBar progress={50} colorIndicator="#02B2AF" />
          </div>
          <span className="w-100px font-bold text-[12px] text-gray-600 ">19</span>
        </div>
        
      </div>
    </div>
  )
}
