import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex items-center flex-col justify-center h-screen ">
          <h2>Inventory Management System</h2>

          <Link href={"/admin/home"}>Home</Link>
          <Link href={"/admin/home/dashboard"}>Dashboard</Link>
    </div>
  )
}
